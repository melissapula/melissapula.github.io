<template>
    <mdb-container class="h-100 mt-0 pt-0" fluid>
        <mdb-row class="pt-4" style="min-height: 100vh; background-color:#42a7f5">
            <mdb-col>
                <mdb-row v-if="imageClustering">
                    <mdb-col>
                        <mdb-row class="justify-content-center pb-4">
                            <codemirror class="CodeMirror" style="width: 75%" v-model="imageClustering" :options="imageClusteringOptions"></codemirror>
                            <p>This code imports an unlabeled dataset of drone images and then sorts them into clusters based on their features.</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="12" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/imageClusteringPCA.png" class="img-fluid">
                                </mdb-row>
                            </mdb-col>
                            <p>Image(1): PCA scatterplot</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="12" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/imageClusteringPCA3D.png" class="img-fluid">
                                </mdb-row>
                            </mdb-col>
                            <p>Image(2): 3D PCA scatterplot</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="12" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/imageClusteringElbow.png" class="img-fluid">
                                </mdb-row>
                            </mdb-col>
                            <p>Image(3): Elbow method</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="12" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/imageClusteringYellowbrick.png" class="img-fluid">
                                </mdb-row>
                            </mdb-col>
                            <p>Image(4): Yellowbrick method</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="12" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/imageClusteringKmeans.png" class="img-fluid">
                                </mdb-row>
                            </mdb-col>
                            <p>Image(5): KMeans Clustering</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="12" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/imageClusteringSilhouette.png" class="img-fluid">
                                </mdb-row>
                            </mdb-col>
                            <p>Image(6): Silhouette</p>
                        </mdb-row>
                        <mdb-row class="justify-content-center align-items-center pb-4">
                            <mdb-col lg="12" sm="12">
                                <mdb-row class="justify-content-center">
                                        <img src="../assets/imageClusteringViewCluster.png" class="img-fluid">
                                </mdb-row>
                            </mdb-col>
                            <p>Image(7): View Cluster 0</p>
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
    name: "ImageClustering",
    components: {
        codemirror
    },
    data() {
        return {
            imageClustering: null,
            spaces: '    ',
            tab: '        ',
            imageClusteringOptions: {
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
            this.imageClustering =
                `# for loading/processing the images
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

#see image(7) for cluster 0 results`
        }
    },
    mounted() {
        this.init();
    }
}

</script>

<style scoped>

</style>