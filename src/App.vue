<template>
  <mdb-container class="h-100 overflow-hidden m-0 p-0 mb-0" fluid>
  <mdb-row class="mt-4 align-items-center justify-content-center" style="min-height: 100vh">
    <mdb-col col="4" v-if="showTheForce == false">
      <mdb-row>
        <mdb-col col="12">
      <img :src="theForceBefore" class="img-fluid">
        </mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">
        <mdb-btn type="button" class="btn mt-2" style="background-color: #1F8AC0; color: #104C91" @click="showTheForce = true"><b>Use the Force</b></mdb-btn>
      </mdb-row>
    </mdb-col>
    <mdb-col col="4" v-if="showTheForce == true">
      <mdb-row>
        <mdb-col col="12">
      <img :src="theForceAfter" class="img-fluid">
        </mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">
        <mdb-btn type="button" class="btn mt-2" style="background-color: #1F8AC0; color: #104C91" @click="showTheForce = false"><b>End the Force</b></mdb-btn>
      </mdb-row>
    </mdb-col>
    <mdb-col col="4">
        <mdb-row class="mb-4">
          <mdb-col col="12">
            <h1 class="text-center" style="color:#104C91"><span class="mr-3"><b>M E L I S S A</b></span><span class="ml-3"><b>P U L A</b></span></h1>
          <h5 class="text-center" style="color:#104C91">Mother. Wife. Nerd.</h5>
          </mdb-col>
        </mdb-row>
      <mdb-row class="justify-content-center"><mdb-btn-group vertical>
            <mdb-btn to="about" style="background-color:#1F8AC0; color:#104C91" class="mb-4">About<mdb-icon icon="user" class="ml-2"></mdb-icon></mdb-btn>
            <mdb-btn style="background-color:#1F8AC0; color:#104C91" class="mb-4">Resume<mdb-icon icon="file-alt" class="ml-2"></mdb-icon></mdb-btn>
            <mdb-btn style="background-color:#1F8AC0; color:#104C91" class="mb-4">Example Work<mdb-icon icon="laptop" class="ml-2"></mdb-icon></mdb-btn>
            <mdb-btn style="background-color:#1F8AC0; color:#104C91" class="mb-4">Blog<mdb-icon icon="blog" class="ml-2"></mdb-icon></mdb-btn>
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

html,
body {
  background-color:#EFC9AF;
  min-height: 100vh;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  align-content: center;
}
</style>
