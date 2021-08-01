<template>
  <mdb-container>
  <mdb-row class="mt-4 align-middle justify-content-center">
    <mdb-col col="5" v-if="showTheForce == false">
      <mdb-row>
        <mdb-col col="12">
      <img :src="theForceBefore" class="img-fluid">
        </mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">
        <mdb-btn type="button" class="btn mt-2 mx-auto" style="background-color: #1F8AC0; color: #104C91" @click="showTheForce = true"><b>Use the Force</b></mdb-btn>
      </mdb-row>
    </mdb-col>
    <mdb-col col="5" v-if="showTheForce == true">
      <img :src="theForceAfter" class="img-fluid">
        <mdb-btn type="button" class="btn mt-2" style="background-color: #1F8AC0; color: #104C91" @click="showTheForce = false"><b>End the Force</b></mdb-btn>
    </mdb-col>
    <mdb-col col="5">
        <mdb-row>
          <mdb-col col="12">
            <h1 class="text-center" style="color:#104C91"><span class="mr-3"><b>M E L I S S A</b></span><span class="ml-3"><b>P U L A</b></span></h1>
          <h5 class="text-center" style="color:#104C91">Mother. Wife. Nerd.</h5>
          </mdb-col>
        </mdb-row>
      <mdb-row class="justify-content-center">
          <mdb-btn-group vertical>
            <mdb-btn style="background-color:#1F8AC0; color:#104C91" class="mb-2">About<mdb-icon icon="profile" class="ml-2"></mdb-icon></mdb-btn>
            <mdb-btn style="background-color:#1F8AC0; color:#104C91" class="mb-2">Resume<mdb-icon icon="file-earmark-text" class="ml-2"></mdb-icon></mdb-btn>
            <mdb-btn style="background-color:#1F8AC0; color:#104C91" class="mb-2">Example Work<mdb-icon icon="laptop" class="ml-2"></mdb-icon></mdb-btn>
            <mdb-btn style="background-color:#1F8AC0; color:#104C91" class="mb-2">Blog<mdb-icon icon="pencil" class="ml-2"></mdb-icon></mdb-btn>
          </mdb-btn-group>
          <!--<a href="aboutPage.html" type="button" class="btn" style="background-color:#1F8AC0; color:#104C91"><b>About</b><i class="fa-fw bi bi-file-person"></i></a>
          <a href="resumePage.html" type="button" class="btn" style="background-color:#1F8AC0; color:#104C91"><b>Resume</b><i class="bi bi-file-earmark-text"></i></a>
          <a href="fishCreek.html" type="button" class="btn" style="background-color:#1F8AC0; color:#104C91"><b>Example Work</b><i class="bi bi-laptop"></i></a>
          <a href="blogPage.html" type="button" class="btn" style="background-color:#1F8AC0; color:#104C91"><b>Blog</b><i class="bi bi-pencil"></i></a>-->
      </mdb-row>
    </mdb-col>
  </mdb-row>
  </mdb-container>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import image1 from "./assets/theforceafter.jpg"
import image2 from "./assets/theforcebefore.jpg"

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data() {
    return {
      showTheForce: false,
      theForceAfter: image1,
      theForceBefore: image2,
    };
  },
  methods: {
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
