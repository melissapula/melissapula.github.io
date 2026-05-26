import{C as u}from"./CodeBlock-C7c0M_g6.js";import{_ as c,o as r,c as o,a as e,d as m,b as g,r as p,F as A,e as v,w,n as b,t as h,i as C,l as y,m as x}from"./index-DDuWzTvZ.js";import{P as k}from"./ProjectCard-Bv0Z2DPn.js";const R="/assets/wordCount1-DJa4bk2R.png",I="/assets/wordCount2-HZggeBLV.png",F="/assets/wordCount3-I1HBpdBM.png",z={name:"WordCount",components:{CodeBlock:u},data(){return{wordCount:`from pyspark.sql import SparkSession
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

#see image(3) for resulting word count and time it took to achieve`}}},P={class:"container-fluid h-100 mt-0 pt-0"},M={class:"row pt-4",style:{height:"calc(100vh - var(--site-nav-height, 56px))","background-color":"#f0f2f5"}},j={class:"col-lg-7 col-sm-12"};function S(s,t,d,f,i,n){const l=p("CodeBlock");return r(),o("div",P,[e("div",M,[e("div",j,[m(l,{code:i.wordCount},null,8,["code"])]),t[0]||(t[0]=g('<div class="col-lg-5 col-sm-12 pb-4 d-flex flex-column align-items-center" style="overflow-y:auto;height:calc(100vh - var(--site-nav-height, 56px) - 1.5rem);"><img src="'+R+'" class="img-fluid" alt="First five rows of the imported CSV file"><p class="mt-2">Image(1): The first five rows of the imported csv file.</p><img src="'+I+'" class="img-fluid mt-3" alt="Top 20 most frequent words ranked in descending order"><p class="mt-2"> Image(2): The word count of each word in the file, listed by number of appearance in descending order and limited to the top 20. </p><img src="'+F+'" class="img-fluid mt-3" alt="Top three words with counts and the elapsed processing time"><p class="mt-2"> Image(3): The word count of the top three words as well as the time it took to find these counts. </p></div>',1))])])}const H=c(z,[["render",S]]),T="/assets/imageClusteringPCA-CNg8A0FE.jpg",D="/assets/imageClusteringPCA3D-Dy2-S3h6.png",K="/assets/imageClusteringElbow-DS68TNNt.png",W="/assets/imageClusteringYellowbrick-mczD8DHr.png",E="/assets/imageClusteringKmeans-BoOW1Xls.png",V="/assets/imageClusteringSilhouette-CirTGNPZ.png",X="/assets/imageClusteringViewCluster-NOW9MuWP.jpg",B={name:"ImageClustering",components:{CodeBlock:u},data(){return{imageClustering:`# for loading/processing the images
from keras.utils import load_img
from keras.applications.vgg16 import preprocess_input

# models
from keras.applications.vgg16 import VGG16
from keras.models import Model

# clustering and dimension reduction
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA

# for everything else
import os
import numpy as np
import matplotlib.pyplot as plt
from random import randint
from PIL import Image
import pandas as pd
import pickle
from progressbar import ProgressBar

path = r"D:/fmow/seq"

# change the working directory to the path where the images are located
os.chdir(path)

# this list holds all the image filename
images = []

# creates a ScandirIterator aliased as files
with os.scandir(path) as files:
    for file in files:
        os.chdir(file)
        count = 0
        with os.scandir(file) as pics:
            for pic in pics:
                if count < 1:
                    if pic.name.endswith('.jpg'):
                        images.append(path + '/' + file.name + '/' + pic.name)
                        count = count + 1

print(len(images))

# view the first 20 images
print(images[:20])

# load the model first and pass as an argument
model = VGG16()
model = Model(inputs = model.inputs, outputs = model.layers[-2].output)

pbar = ProgressBar()

def extract_features(file, model):
    # load the image as a 224x224 array
    img = load_img(file, target_size=(224,224))
    # convert from 'PIL.Image.Image' to numpy array
    img = np.array(img)
    # reshape the data for the model reshape(num_of_samples, dim 1, dim 2, channels)
    reshaped_img = img.reshape(1,224,224,3)
    # prepare image for model
    imgx = preprocess_input(reshaped_img)
    # get the feature vector
    features = model.predict(imgx, use_multiprocessing=True)
    return features

data = {}
#p = r"D:\\fmow\\features_final.pkl"

# loop through each image in the dataset
for image in images:
    # try to extract the features and update the dictionary
    try:
        feat = extract_features(image,model)
        data[image] = feat
    # if something fails, save the extracted features as a pickle file (optional)
    except:
        print(image + 'features can not be extracted.')
        #with open(p,'wb') as file:
            #pickle.dump(data,file)

#read the image
vgg_array = np.array(feat[0])
vgg_array = np.reshape(vgg_array, (64, 64))
vgg_image = Image.fromarray(vgg_array, mode="L")
vgg_image.save('vgg_image.png')

im = Image.open(r'D:\\fmow\\seq\\0000000\\0000000_0_msrgb.jpg')
#im2 = Image.open(r'D:\\fmow\\seq\\vgg_image.png')

display(im)
#display(im2)

print(feat[0].max())

vgg_array = np.array(feat[0])

print(vgg_array.shape)

vgg_array = np.reshape(vgg_array, (64, 64))

print(vgg_array)

# get a list of the filenames
filenames = np.array(list(data.keys()))

# get a list of just the features
feat = np.array(list(data.values()))

feat.shape

# reshape so that there are 231 samples of 4096 vectors
feat = feat.reshape(-1,4096)

feat.shape

# reduce the amount of dimensions in the feature vector
pca = PCA(n_components=3, random_state=22)
pca.fit(feat)
x = pca.transform(feat)

print(f"Components before PCA: {feat.shape[1]}")
print(f"Components after PCA: {pca.n_components}")

#visualizing the data
from __future__ import print_function
import time

from sklearn.datasets import fetch_openml
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE

%matplotlib inline
from mpl_toolkits.mplot3d import Axes3D

import seaborn as sns

feat_cols = [ 'pixel'+str(i) for i in range(x.shape[1]) ]

df = pd.DataFrame(x,columns=feat_cols)

print('Size of the dataframe: {}'.format(df.shape))

print(df)

#visualization after PCA
# reduce the amount of dimensions in the feature vector
pca = PCA(n_components=3, random_state=22)
pca.fit(feat)
x = pca.transform(feat)

pca = PCA(n_components=3)
pca_result = pca.fit_transform(df[feat_cols].values)

df['pca-one'] = pca_result[:,0]
df['pca-two'] = pca_result[:,1]
df['pca-three'] = pca_result[:,2]

print(df)

print('Explained variation per principal component: {}'.format(pca.explained_variance_ratio_))

# For reproducability of the results
np.random.seed(42)

rndperm = np.random.permutation(df.shape[0])

plt.figure(figsize=(16,10))

sns.scatterplot(
    x="pca-one", y="pca-two",
    palette=sns.color_palette("hls", 10),
    data=df.loc[rndperm, :],
    legend="full",
    alpha=0.3
)

#see image(1) for scatterplot

ax = plt.figure(figsize=(16,10)).add_subplot(projection='3d')
ax.scatter(
    xs=df.loc[rndperm,:]["pca-one"],
    ys=df.loc[rndperm,:]["pca-two"],
    zs=df.loc[rndperm,:]["pca-three"]
)
ax.set_xlabel('pca-one')
ax.set_ylabel('pca-two')
ax.set_zlabel('pca-three')
plt.show()

#see image(2) for 3D scatterplot

#K-Means
# reduce the amount of dimensions in the feature vector
pca = PCA(n_components=2, random_state=22)
pca.fit(feat)
x = pca.transform(feat)

# this is just incase you want to see which value for k might be the best
sse = []
list_k = list(range(2, 20))

pbar1 = ProgressBar()

for k in pbar1(list_k):
    km = KMeans(n_clusters=k, random_state=22)
    km.fit(x)

    sse.append(km.inertia_)

# Plot sse against k
plt.figure(figsize=(6, 6))
plt.plot(list_k, sse)
plt.xlabel(r'Number of clusters *k*')
plt.ylabel('Sum of squared distance');

#see image(3) for elbow method

from yellowbrick.cluster import KElbowVisualizer, SilhouetteVisualizer

model = KMeans(random_state=22)

elb_visualizer = KElbowVisualizer(model, k=(2,20))
elb_visualizer.fit(x)
elb_visualizer.show()

#see image(4) for yellowbrick method

# cluster feature vectors
#kmeans = KMeans(n_clusters=6, random_state=22)
#kmeans.fit(x)
kmeans = KMeans(n_clusters=6)
label = kmeans.fit_predict(x)
data['Cluster'] = label
centroids = kmeans.cluster_centers_
u_labels = np.unique(label)
for i in u_labels:
    plt.scatter(x[label == i, 0], x[label == i, 1], label = i)
plt.scatter(centroids[:,0] , centroids[:,1] , s = 80, color = 'k')
plt.title('KMeans Clustering of Images')
plt.legend()
plt.show()

#see image(5) for kmeans clustering

from sklearn.metrics import silhouette_score

score = silhouette_score(x, kmeans.labels_)
print("For n_clusters = {}, silhouette score is {})".format(4, score))

sil_visualizer = SilhouetteVisualizer(kmeans)
sil_visualizer.fit(x)
sil_visualizer.show()

#see image(6) for silhouette

# holds the cluster id and the images { id: [images] }
groups = {}
for file, cluster in zip(filenames,kmeans.labels_):
    if cluster not in groups.keys():
        groups[cluster] = []
        groups[cluster].append(file)
    else:
        groups[cluster].append(file)

# view a cluster
groups[0]

# function that lets you view a cluster (based on identifier)
def view_cluster(cluster):
    plt.figure(figsize = (25,25));
    # gets the list of filenames for a cluster
    files = groups[cluster]
    # only allow up to 30 images to be shown at a time
    if len(files) > 30:
        print(f"Clipping cluster size from {len(files)} to 30")
        files = files[:29]
    # plot each image in the cluster
    for index, file in enumerate(files):
        plt.subplot(10,10,index+1);
        img = load_img(file)
        img = np.array(img)
        plt.imshow(img)
        plt.axis('off')

view_cluster(0)

#see image(7) for cluster 0 results`}}},_={class:"container-fluid h-100 mt-0 pt-0"},Y={class:"row pt-4",style:{height:"calc(100vh - var(--site-nav-height, 56px))","background-color":"#f0f2f5"}},L={class:"col-lg-7 col-sm-12"};function J(s,t,d,f,i,n){const l=p("CodeBlock");return r(),o("div",_,[e("div",Y,[e("div",L,[m(l,{code:i.imageClustering},null,8,["code"])]),t[0]||(t[0]=g('<div class="col-lg-5 col-sm-12 pb-4 d-flex flex-column align-items-center" style="overflow-y:auto;height:calc(100vh - var(--site-nav-height, 56px) - 1.5rem);"><p> This code imports an unlabeled dataset of drone images and then sorts them into clusters based on their features. </p><img src="'+T+'" class="img-fluid mt-3" alt="PCA scatterplot reducing drone-image features to two dimensions, showing visible clusters"><p class="mt-2">Image(1): PCA scatterplot</p><img src="'+D+'" class="img-fluid mt-3" alt="3D PCA scatterplot of drone image features"><p class="mt-2">Image(2): 3D PCA scatterplot</p><img src="'+K+'" class="img-fluid mt-3" alt="Elbow plot for choosing optimal number of K-means clusters"><p class="mt-2">Image(3): Elbow method</p><img src="'+W+'" class="img-fluid mt-3" alt="Yellowbrick library cluster evaluation chart"><p class="mt-2">Image(4): Yellowbrick method</p><img src="'+E+'" class="img-fluid mt-3" alt="K-means clustering result projected on principal components"><p class="mt-2">Image(5): KMeans Clustering</p><img src="'+V+'" class="img-fluid mt-3" alt="Silhouette analysis plot showing how well points fit their assigned cluster"><p class="mt-2">Image(6): Silhouette</p><img src="'+X+'" class="img-fluid mt-3" alt="Grid of drone images belonging to cluster 0 after K-means classification"><p class="mt-2">Image(7): View Cluster 0</p></div>',1))])])}const Q=c(B,[["render",J]]),G="/assets/rfcInitial-ByU4FS4e.png",Z="/assets/rfcDropNull-C_eqF7vJ.png",O="data:image/png;base64,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",N="/assets/rfcPipelineFit-sEEzmujW.png",U="/assets/rfcTrain-DJAKc4Sy.png",q="data:image/png;base64,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",$="/assets/rfcTest-BLp27zta.png",ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB6CAYAAAB5sueeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAlCSURBVHhe7Z1NqE1dGMfXvW8MfITkFnIVc0TJzc1AlEQiM+QjJQMmjBAvyUQmDFDykanIZ4qMFCmfIwaUFEXK94DB+/Zbdz/nLufuve4+Z+9z9r09z6925569z1577fVfz7PW3uu5a3V0d3f/5wx1dCafhjJMeKWY8Eox4ZViwivFhFeKCa+U3MJPnz7dnT9/3u3fvz/Z0z7mzp3rLl265LZu3ZrsMYrqYRavFBNeKYO+ssWVLFiwIPnWz58/f9zZs2fd1atXvQtes2ZNcsS5jx8/ugMHDri3b9/67ydOnHAzZ870f8PDhw/doUOH/N+rVq1yW7ZscSNGjPDff/365Y4cOeKePHky4Dwh9pswbdzhwYMHXVdXl/8Oly9fdmfOnPF/x64NrUw7VmaxtPPokYfc7+olM2/evKndfLugjd+zZ4+7fft2rWC1U1QPc/VKMeGVYsOySjGLV4oJrxQTXikmvFJMeKWY8Eox4ZXyz7hx4/5N/h4U3l1PnTq19r65XfB68ujRo66zs9O9evUq2WsU0cMsXimVC481E1Bw69Ytv1GLjb7RO8qF8mkFlQu/e/du9/37d7d8+XK3b98+N3ny5EqifLTRFuHrrZowKoZaGbNG6Lt37/rf0Va9ePHCzZgxo2U1vRGy8i3gneQY4+DcD8h5YagYlVm8GWnIcc7jfLFu0mAfY/WMx588eTL12kVpufDcDOPGYtVsa9eu9SJPmjTJ/fjxwz179sz/loIgyGDMmDFu4sSJfl9VxPINCDl27Fi3fft2f+zx48duw4YNucXhHpctW+avgafj+9KlS2sViMALgjMk/fDaZdBy4bkZburcuXPJnoEsXLjQ3zAFcerUKff79283bdq05Gg1xPKNuLNmzXL379+vRRlduHDBV+K8wnOPFy9e9GKyffjwwU2ZMiU52npaLjw3Q4F8/vw52fM3uDPcGjWfWt3R0eH3v3v3zn9WxWD5RrhPnz4l34YfLRf+/fv3yV8DoeCIRZOaD7h/CjWrwNtFLN8wcuRIn1eBpgkPMVxoufAISoFs3Lgx2dMPbTtWtXr1at+msvX29vo4MnGhVRHLt7hm8kqeYcWKFf5e7ty547+DuG7puzQCRsH158yZk+wpl7YIT3QpbaL0gKWHirhElgK9V7YqgjnTiOUbduzY4Tt+0uvmd8ePH/f3xHblyhU3b948f4wK8vTpU39eXujz8ISzbdu2Adcug4ZCr3gcef78edsjXbGqvXv3ups3b/oCMfoookfLLd4YmhQSXl42iCus3+wN3NDFomyVYq5eKSa8Ukx4pZjwSjHhlWLCK8WEV4oJr5TcwvO+nPCgKt7GMTjBIEUYyqSdonqYxSvFhFeKzXpls17FkczYrFdDg6J6mKtXigmvFBuPV4pZvFJMeKWY8Eox4ZViwivFhFeKCa8Um/VqGFNED7N4pQwJ4SXQQuaBKRssg1ErRsxC5LryL19Z/5HK+RxPCwRpJm3Skf3hRlohWWmXQeXCUwiMvMkQbplI4X/79s0PW4ZQwXbu3OlH/GSOG/7nffPmzckv+iB/THrw5cuXZE8fRdJmhFH2szHPDcOyMsNGLO2yqFR4bnD27Nlu165d7uvXr8ne8li3bp2fbePRo0fJnn4Qk1ktwulM6qc2IX/My/PgwQM/S0dI0bRDmPyA39+4ccN/j6VdFpUKT6eECQZaYe1AhcoKTODaTLciM1XhTpnIgP83F7BQLPXatWvJnn6Kph2yZMkS9/Lly1onLZZ2Waju3FHpcMeHDx/20TJEsIQRNFhubLauGLG0Q+Q6Yu3tQrXwdJ6YpoQ29vr1637aEUKbaKOZl+fevXtNPSpBVtr1YO14h2av0yxqhcfSmFWTuWpoarBG4tqYy4aJjCZMmOBj4uhtM8+NTMuW58kjljauX5Dfycye7US1xRMIGU5ZRkeTmatwu4hS3+tGvE2bNuXqk2SlHU7jhrXTh2h1e55GpcJjOVgQVkXkKFaFdZX1PI9rJW3c7KhRo/ynPBfziQsWq2ZjitIwOjhG0bR5TOzu7k619ljaZWGzXg1jiuih2tVrxoRXikXZKsUsXikmvFJMeKWY8Eqx0KthTBE9zOKVUrnw4WtbNmpxM3Ae59eHR8l+2cLjsWPy6lWOZb1GlvynvVJlQIZImqxzw2vUny+vbdnCsK2yqFz4MhYczAqPknRksIVBFiJqpBAZM5djp0+f9sek8EUIOU4eyWs9snTJz58//adAnmIhZRyXcXrSl0ogxxjJozw4xkAOoVxpladZKhWemy264CAiZoVHMTpWH/5U/xuBVa+yjkFa6BT5RyCWIQshT7GQMu5t/vz5qVOXcIxxfMpB2m7Kp+z1aSoVHmEYqiyy4GAsPIoBDNIjXQqU4IqsoAfEQnjJSwjnUhnD0ClJLxRI4HsspAwBucdFixYNaEokXk+uRb4I4WKULhzmLcqQ6Nw1u+AgFhcLj2LUCndJurLQEYIIFLT0LxhCDRcQBCoMxzgXwhWmWJAQWGiwURBw/Pjx3hvgyhnvh7ApGT16tM8boVuEcL1+/brUBQkrF14iW5jIp5EFB8XiYuFRCMcYOBGrVADcctjRQmQCK6TwcbFh/4KKwzE2KsWxY8e8BbItXry4FmHTDAR2SKUhDdJnzJ7ywOLXr1/v93FtKhzHBlsLrxEqFZ52s9kFB3GXsfConp4eLyRrvuJNSJ/pxnCxYq0hFD4eIcudcr54IoTHYgmQ4NpYpXzP81TCfSNuWnOGF6D5Y2o1GWcX95/Wz2iWSoUvsuBgfa+7PjxKrCMUEsEIiUorQI7hEcJ2PIQ4POkDhJ6ADW/CEwVPBmFTkgVpkBZpQnjfdFL5JByb+4Pw2mVRqfCIiysGLFba4TLm0SNtFgDkqQGrZFu5cmWtJ01hS/suVktbKlYm7btsdO7yhmWFaaeFlEneqGj8pv6++cRTiUdp5Np5sdCrYUwRPYZEr95oPya8Uiz0Silm8Uox4ZViwivFhFeKCa8UE14pJrxSTHil5BZeBh4ajYcrA0bOCDhk4MToo6geZvFKMeGVMui7elzJYAvc4YKJfBHCxfOA4UNbcNAWHGwY2nhbcPBviuphrl4pJrxSbDxeKWbxSjHhlWLCK8WEV4oJrxQTXikmvFJMeKWY8Eox4ZViwqvEuf8BcuxM4AvBlhMAAAAASUVORK5CYII=",te="/assets/rfcPredictionsTransform-dF1nL4vo.png",se="/assets/rfcPredictionSelect-Koj_8-_i.png",ae="data:image/png;base64,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",re={name:"RandomForestClassifier",components:{CodeBlock:u},data(){return{rfc:`
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
            `}}},ie={class:"container-fluid h-100 mt-0 pt-0"},oe={class:"row pt-4",style:{height:"calc(100vh - var(--site-nav-height, 56px))","background-color":"#f0f2f5"}},ne={class:"col-lg-7 col-sm-12"};function le(s,t,d,f,i,n){const l=p("CodeBlock");return r(),o("div",ie,[e("div",oe,[e("div",ne,[m(l,{code:i.rfc},null,8,["code"])]),t[0]||(t[0]=g('<div class="col-lg-5 col-sm-12 pb-4 d-flex flex-column align-items-center" style="overflow-y:auto;height:calc(100vh - var(--site-nav-height, 56px) - 1.5rem);"><p>This code imports a 1TB dataset and then performs predictive analysis on it.</p><img src="'+G+'" class="img-fluid mt-3" alt="Initial table from imported dataset"><p class="mt-2">Image(1): Initial table.</p><img src="'+Z+'" class="img-fluid mt-3" alt="Table after null values dropped"><p class="mt-2">Image(2): Table after null values have been dropped.</p><img src="'+O+'" class="img-fluid mt-3" alt="Boolean target counts grouped"><p class="mt-2">Image(3): Boolean counts.</p><img src="'+N+'" class="img-fluid mt-3" alt="Table after running through preprocessing pipeline"><p class="mt-2">Image(4): Table after running through pipeline.</p><img src="'+U+'" class="img-fluid mt-3" alt="Sample rows from the training dataset"><p class="mt-2">Image(5): Table showing some of the values in the train dataset.</p><img src="'+q+'" class="img-fluid mt-3" alt="Boolean target counts in the training dataset"><p class="mt-2">Image(6): Boolean count for train dataset.</p><img src="'+$+'" class="img-fluid mt-3" alt="Sample rows from the test dataset"><p class="mt-2">Image(7): Table showing some of the values in the test dataset.</p><img src="'+ee+'" class="img-fluid mt-3" alt="Boolean target counts in the test dataset"><p class="mt-2">Image(8): Boolean count for test dataset.</p><img src="'+te+'" class="img-fluid mt-3" alt="Random Forest prediction model output"><p class="mt-2">Image(9): Prediction model.</p><img src="'+se+'" class="img-fluid mt-3" alt="Table comparing predicted values against actual values"><p class="mt-2">Image(10): Predictions vs actual.</p><img src="'+ae+'" class="img-fluid mt-3" alt="Final accuracy score of the trained model"><p class="mt-2">Image(11): Accuracy of predictions.</p></div>',1))])])}const ce=c(re,[["render",le]]),me={name:"DataAnalysis",components:{WordCount:H,ImageClustering:Q,RandomForestClassifier:ce,ProjectCard:k},computed:{selectedProject:{get(){const s=this.$route.query.project;return s&&this.projectComponents[s]?s:null},set(s){s?this.$router.push({query:{project:s}}):this.$router.push({query:{}})}}},data(){return{projectComponents:{wordcount:"WordCount",imageclustering:"ImageClustering",randomforestclassifier:"RandomForestClassifier"},projects:[{key:"wordcount",title:"Word Count",subtitle:"CSV text frequency analysis",description:"Loads a CSV corpus with pandas, tokenizes the text, and ranks words by frequency. Surfaces the top 20 results along with timing on the most common terms.",tags:["Python","Pandas","Text Analysis"],previewClass:"preview-indigo"},{key:"imageclustering",title:"Image Clustering",subtitle:"Unsupervised feature grouping",description:"Takes an unlabeled dataset of drone images and groups them into clusters based on extracted features. Uses PCA for dimensionality reduction with 2D and 3D scatterplots, then K-means tuned with elbow and silhouette plots.",tags:["Python","scikit-learn","PCA","K-means"],previewClass:"preview-cyan"},{key:"randomforestclassifier",title:"Random Forest Classifier",subtitle:"Predictive analysis at scale",description:"Ingests a 1TB dataset, cleans null values, groups and transforms features, then trains a Random Forest model and evaluates accuracy on a held-out test set.",tags:["Python","scikit-learn","Random Forest","Pandas"],previewClass:"preview-rose"}]}}},pe={key:0,class:"container-fluid mt-0 pt-0"},de={class:"row justify-content-center pt-5",style:{"background-color":"#f0f2f5","min-height":"calc(100vh - var(--site-nav-height, 56px))"}},fe={class:"col-lg-10 col-md-11"},ue={class:"row justify-content-center"},ge={class:"preview-content"},he={class:"preview-title"},Ae={class:"preview-subtitle"},ve={key:1,class:"project-view"};function we(s,t,d,f,i,n){const l=p("ProjectCard");return r(),o("div",null,[n.selectedProject?(r(),o("div",ve,[e("mfp-button",{class:"back-button",variant:"secondary",onClick:t[0]||(t[0]=a=>n.selectedProject=null)},[...t[2]||(t[2]=[e("i",{class:"fas fa-arrow-left me-2","aria-hidden":"true"},null,-1),C("Back to Data Analysis ",-1)])]),(r(),y(x(i.projectComponents[n.selectedProject])))])):(r(),o("div",pe,[e("div",de,[e("div",fe,[t[1]||(t[1]=e("h2",{class:"text-center mb-4 page-heading"},"Data Analysis",-1)),e("div",ue,[(r(!0),o(A,null,v(i.projects,a=>(r(),o("div",{class:"col-lg-4 col-md-6 mb-4",key:a.key},[m(l,{title:a.title,description:a.description,tags:a.tags,"cta-text":"View Project",onSelect:be=>n.selectedProject=a.key},{preview:w(()=>[e("div",{class:b(["project-preview",a.previewClass])},[e("div",ge,[e("span",he,h(a.title),1),e("span",Ae,h(a.subtitle),1)])],2)]),_:2},1032,["title","description","tags","onSelect"])]))),128))])])])]))])}const ke=c(me,[["render",we],["__scopeId","data-v-cfc71620"]]);export{ke as default};
