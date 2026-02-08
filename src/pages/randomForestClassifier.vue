<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow v-if="rfc" style="height: calc(100vh - 56px); background-color: #f0f2f5" class="pt-4">
            <MDBCol lg="7" sm="12">
                <Codemirror class="CodeMirror" style="width: 100%" :value="rfc" :options="rfcOptions"></Codemirror>
            </MDBCol>
            <MDBCol
                lg="5"
                sm="12"
                class="pb-4 d-flex flex-column align-items-center"
                style="overflow-y: auto; height: calc(100vh - 90px)"
            >
                <p>This code imports a 1TB dataset and then performs predictive analysis on it.</p>
                <img src="../assets/rfcInitial.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(1): Initial table.</p>
                <img src="../assets/rfcDropNull.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(2): Table after null values have been dropped.</p>
                <img src="../assets/rfcGroupBy.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(3): Boolean counts.</p>
                <img src="../assets/rfcPipelineFit.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(4): Table after running through pipeline.</p>
                <img src="../assets/rfcTrain.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(5): Table showing some of the values in the train dataset.</p>
                <img src="../assets/rfcTrainGroupBy.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(6): Boolean count for train dataset.</p>
                <img src="../assets/rfcTest.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(7): Table showing some of the values in the test dataset.</p>
                <img src="../assets/rfcTestGroupBy.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(8): Boolean count for test dataset.</p>
                <img src="../assets/rfcPredictionsTransform.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(9): Prediction model.</p>
                <img src="../assets/rfcPredictionSelect.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(10): Predictions vs actual.</p>
                <img src="../assets/rfcAccuracy.png" class="img-fluid mt-3" />
                <p class="mt-2">Image(11): Accuracy of predictions.</p>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import Codemirror from 'codemirror-editor-vue3';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/mode/python/python.js';
    import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';
    export default {
        name: 'RandomForestClassifier',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            Codemirror
        },
        data() {
            return {
                rfc: null,
                spaces: '    ',
                tab: '        ',
                rfcOptions: {
                    tabSize: 4,
                    mode: 'text/x-python',
                    lineNumbers: true,
                    line: true,
                    smartIndent: true,
                    indentUnit: 4,
                    indentWithTabs: true,
                    readOnly: true,
                    foldGutter: true
                }
            };
        },
        methods: {
            init() {
                this.rfc = `
from pyspark.sql import SparkSession

spark = SparkSession.builder.getOrCreate()

df = spark.read.option('header', 'false').option('inferSchema', 'true').option('delimiter', '\\t').csv(r"D:\\day_0")

df.show()

#see image(1)

#Drop null values
df = df.select("_c0","_c1","_c2","_c3","_c4","_c5","_c6","_c7","_c8","_c9","_c10","_c11","_c12","_c13")
df = df.na.drop()
df.show()

#see image(2)

df.groupBy('_c0').count().show()

#see image(3)

from pyspark.ml.feature import VectorAssembler

feature_list = []
for col in df.columns:
    if col == '_c0':
        continue
    else:
        feature_list.append(col)

assembler = VectorAssembler(inputCols=feature_list, outputCol="features")

from pyspark.ml.feature import StringIndexer

label_stringIdx = StringIndexer(inputCol = '_c0', outputCol = 'labelIndex')

from pyspark.ml.classification import RandomForestClassifier

rf = RandomForestClassifier(featuresCol = 'features', labelCol = 'labelIndex')

from pyspark.ml import Pipeline

pipeline = Pipeline(stages=[assembler, label_stringIdx])

df = pipeline.fit(df).transform(df)
df.show(25)

#see image(4)

train, test = df.randomSplit([0.2, 0.8])

train.show()

#see image(5)

train.groupBy('_c0').count().show()

#see image(6)

test.show()

#see image(7)

test.groupBy('_c0').count().show()

#see image(8)

model = rf.fit(train)

predictions = model.transform(test)
predictions.select('_c0', 'labelIndex', 'rawPrediction', 'prediction', 'probability').show(25)

#see image(9)

predictions.select("labelIndex", "prediction").show(25)

#see image(10)

from pyspark.ml.evaluation import MulticlassClassificationEvaluator

evaluator = MulticlassClassificationEvaluator(labelCol="labelIndex", predictionCol="prediction")
accuracy = evaluator.evaluate(predictions)
print("Accuracy = %s" % (accuracy))
print("Test Error = %s" % (1.0 - accuracy))

#see image(11)

from pyspark.mllib.evaluation import MulticlassMetrics
from pyspark.sql.types import FloatType
import pyspark.sql.functions as F

preds_and_labels = predictions.select(['prediction','labelIndex']).withColumn('labelIndex', F.col('labelIndex').cast(FloatType())).orderBy('prediction')
preds_and_labels = preds_and_labels.select(['prediction','labelIndex'])
metrics = MulticlassMetrics(preds_and_labels.rdd.map(tuple))
print(metrics.confusionMatrix().toArray())

predictions.groupBy('prediction').count().show()

predictions.groupBy('labelIndex').count().show()

import plotly.express as px

fig = px.imshow(metrics.confusionMatrix().toArray(),
                text_auto=True,
                labels=dict(x="Predictions", y="Labels", color="Productivity"),
                x=['False', 'True'],
                y=['False', 'True'])
fig.show()
            `;
            }
        },
        mounted() {
            this.init();
        }
    };
</script>

<style scoped>
    .CodeMirror {
        height: calc(100vh - 90px) !important;
    }
</style>
