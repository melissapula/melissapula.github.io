<template>
    <ProjectShell>
        <template #code>
            <CodeBlock :code="wordCount" />
        </template>
        <template #summary>
            <img src="../assets/wordCount1.png" class="img-fluid" alt="First five rows of the imported CSV file" />
            <p class="mt-sm">Image(1): The first five rows of the imported csv file.</p>
            <img
                src="../assets/wordCount2.png"
                class="img-fluid mt-md"
                alt="Top 20 most frequent words ranked in descending order"
            />
            <p class="mt-sm">
                Image(2): The word count of each word in the file, listed by number of appearance in descending order
                and limited to the top 20.
            </p>
            <img
                src="../assets/wordCount3.png"
                class="img-fluid mt-md"
                alt="Top three words with counts and the elapsed processing time"
            />
            <p class="mt-sm">
                Image(3): The word count of the top three words as well as the time it took to find these counts.
            </p>
        </template>
    </ProjectShell>
</template>

<script>
    import CodeBlock from '@/components/CodeBlock.vue';
    import ProjectShell from '@/components/ProjectShell.vue';
    export default {
        name: 'WordCount',
        components: { CodeBlock, ProjectShell },
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
