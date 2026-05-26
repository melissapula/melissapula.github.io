<template>
    <div class="container-fluid h-100 mt-0 pt-0">
        <div class="row pt-4" style="height: calc(100vh - var(--site-nav-height, 56px)); background-color: #f0f2f5">
            <div class="col-lg-7 col-sm-12">
                <CodeBlock :code="wordCount" />
            </div>
            <div
                class="col-lg-5 col-sm-12 pb-4 d-flex flex-column align-items-center"
                style="overflow-y: auto; height: calc(100vh - var(--site-nav-height, 56px) - 1.5rem)"
            >
                <img src="../assets/wordCount1.png" class="img-fluid" alt="First five rows of the imported CSV file" />
                <p class="mt-2">Image(1): The first five rows of the imported csv file.</p>
                <img
                    src="../assets/wordCount2.png"
                    class="img-fluid mt-3"
                    alt="Top 20 most frequent words ranked in descending order"
                />
                <p class="mt-2">
                    Image(2): The word count of each word in the file, listed by number of appearance in descending
                    order and limited to the top 20.
                </p>
                <img
                    src="../assets/wordCount3.png"
                    class="img-fluid mt-3"
                    alt="Top three words with counts and the elapsed processing time"
                />
                <p class="mt-2">
                    Image(3): The word count of the top three words as well as the time it took to find these counts.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import CodeBlock from '@/components/CodeBlock.vue';
    export default {
        name: 'WordCount',
        components: { CodeBlock },
        data() {
            return {
                wordCount: `from pyspark.sql import SparkSession
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
            };
        }
    };
</script>

<style scoped></style>
