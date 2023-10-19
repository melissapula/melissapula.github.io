<template>
    <mdb-container class="h-100 mt-0 pt-0" fluid>
        <mdb-row class="pt-4" style="min-height: 100vh; background-color:#42a7f5">
            <mdb-col>
                <mdb-row v-if="rfc">
                    <mdb-col>
                        <mdb-row class="justify-content-center pb-4">
                            <codemirror class="CodeMirror" style="width: 75%" v-model="rfc" :options="rfcOptions"></codemirror>
                        </mdb-row>
                        <mdb-row class="justify-content-center">
                            <p>This code imports a 1TB dataset and then performs predictive analysis on it.</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="11" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcInitial.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(1): Initial table.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcDropNull.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(2): Table after null values have been dropped.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcGroupBy.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(3): Boolean counts.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcPipelineFit.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(4): Table after running through pipeline.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcTrain.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(5): Table showing some of the values in the train dataset.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcTrainGroupBy.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(6): Boolean count for train dataset.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcTest.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(7): Table showing some of the values in the test dataset.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcTestGroupBy.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(8): Boolean count for test dataset.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcPredictionsTransform.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(9): Prediction model.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcPredictionSelect.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(10): Predictions vs actual.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                    <img src="../assets/rfcAccuracy.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                    <p>Image(11): Accuracy of predictions.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                    </mdb-col>
                </mdb-row>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/python/python.js'
export default {
    name: "RandomForestClassifier",
    components: {
        codemirror
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
                foldGutter: true,
            },
        }
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
            `
        }
    },
    mounted() {
        this.init();
    }
}

</script>

<style scoped>

</style>