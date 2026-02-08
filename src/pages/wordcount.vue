<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow v-if="wordCount" style="height: calc(100vh - 56px); background-color: #f0f2f5" class="pt-4">
            <MDBCol lg="7" sm="12">
                <Codemirror
                    class="CodeMirror"
                    style="width: 100%"
                    :value="wordCount"
                    :options="wordCountOptions"
                ></Codemirror>
            </MDBCol>
            <MDBCol
                lg="5"
                sm="12"
                class="pb-4 d-flex flex-column align-items-center"
                style="overflow-y: auto; height: calc(100vh - 90px)"
            >
                <img src="../assets/wordCount1.png" class="img-fluid" />
                <p class="mt-2">Image(1): The first five rows of the imported csv file.</p>
                <img src="../assets/wordCount2.png" class="img-fluid mt-3" />
                <p class="mt-2">
                    Image(2): The word count of each word in the file, listed by number of appearance in descending
                    order and limited to the top 20.
                </p>
                <img src="../assets/wordCount3.png" class="img-fluid mt-3" />
                <p class="mt-2">
                    Image(3): The word count of the top three words as well as the time it took to find these counts.
                </p>
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
        name: 'WordCount',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            Codemirror
        },
        data() {
            return {
                wordCount: null,
                spaces: '    ',
                tab: '        ',
                wordCountOptions: {
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
                this.wordCount = `from pyspark.sql import SparkSession
from pyspark.sql.functions import col, desc, lower
from datetime import datetime
import pyspark.sql.functions as f

spark = SparkSession.builder.appName('PySpark Word Count').getOrCreate()
df = spark.read.csv('hmda_2016_nationwide_all-records_labels.csv', header='True', inferSchema='True')
df.limit(5).show()

#see image(1) for resulting code up to now

df.withColumn('word', f.explode(f.split(f.lower(f.col('action_taken_name')), ' '))) \\
  .groupBy('word') \\
  .count() \\
  .sort('count', ascending=False) \\
  .show()

#see image(2) for resulting code up to now

start_time = datetime.now()

loan = df.filter(lower(col('action_taken_name')).contains('loan'))
originated = df.filter(lower(col('action_taken_name')).contains('originated'))
by = df.filter(lower(col('action_taken_name')).contains('by'))

print('The total number of Loan: ', loan.count())
print('The total number of originated: ', originated.count())
print('The total number of by: ', by.count())

end_time = datetime.now()

print('Total time: ', end_time - start_time)

#see image(3) for resulting word count and time it took to achieve`;
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
