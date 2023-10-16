<template>
    <mdb-container class="h-100 mt-0 pt-0" fluid>
        <mdb-row class="pt-4" style="min-height: 100vh; background-color:#42a7f5">
            <mdb-col>
                <mdb-row v-if="wordCount">
                    <mdb-col>
                        <mdb-row class="justify-content-center pb-4">
                            <codemirror class="CodeMirror" style="width: 75%" v-model="wordCount" :options="wordCountOptions"></codemirror>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="12" sm="12">
                                <mdb-row class="justify-content-center">
                                    <mdb-col col="11">
                                        <img src="../assets/wordCount1.png" class="img-fluid">
                                    </mdb-col>
                                </mdb-row>
                            </mdb-col>
                                        <p>Image(1): The first five rows of the imported csv file.</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/wordCount2.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                        <p>Image(2): The word count of each word in the file, listed by number of appearance in descending order and limited to the top 20.</p>
                                </mdb-row>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="6" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/wordCount3.png" class="img-fluid">
                                </mdb-row>
                                <mdb-row class="justify-content-center">
                                        <p>Image(3):  The word count of the top three words as well as the time it took to find these counts.</p>
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
    name: "WordCount",
    components: {
        codemirror
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
                foldGutter: true,
            },
        }
    },
    methods: {
        init() {
            this.wordCount =
                `from pyspark.sql import SparkSession
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

#see image(3) for resulting word count and time it took to achieve`
        }
    },
    mounted() {
        this.init();
    }
}
</script>

<style scoped>

</style>