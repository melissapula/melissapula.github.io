<template>
  <mdb-row style="background-color:#EFC9AF">
  <mdb-row class="m-4 justify-content-center align-items-center" style="min-height:800px">
    <mdb-col v-if="showTheForce == false" col="4">
      <img src="img/theforcebefore.jpg" width="100%">
      <mdb-col col="6" class="d-grid gap-4 mx-auto">
        <mdb-btn type="button" class="btn mt-2" style="background-color: #1F8AC0; color: #104C91" @click="showTheForce = true"><b>Use the Force</b></mdb-btn>
      </mdb-col>
    </mdb-col>
    <mdb-col col="4" v-if="showTheForce == true">
      <img src="img/theforceafter.jpg" width="100%">
      <div class="d-grid gap-2 col-6 mx-auto">
        <mdb-btn type="button" class="btn mt-2" style="background-color: #1F8AC0; color: #104C91" @click="showTheForce = false"><b>End the Force</b></mdb-btn>
      </div>
    </mdb-col>
    <mdb-col col="4" class="d-flex align-items-center">
      <mdb-col col="12" class="mx-auto">
        <div class="pb-4">
          <h1 class="text-center" style="color:#104C91"><b>M E L I S S A   P U L A</b></h1>
          <h5 class="text-center" style="color:#104C91">Mother. Wife. Nerd.</h5>
        </div>
        <mdb-col col="6" class="d-grid gap-4 mx-auto mt-4">
          <a href="aboutPage.html" type="button" class="btn" style="background-color:#1F8AC0; color:#104C91"><b>About</b><i class="fa-fw bi bi-file-person"></i></a>
          <a href="resumePage.html" type="button" class="btn" style="background-color:#1F8AC0; color:#104C91"><b>Resume</b><i class="bi bi-file-earmark-text"></i></a>
          <a href="fishCreek.html" type="button" class="btn" style="background-color:#1F8AC0; color:#104C91"><b>Example Work</b><i class="bi bi-laptop"></i></a>
          <a href="blogPage.html" type="button" class="btn" style="background-color:#1F8AC0; color:#104C91"><b>Blog</b><i class="bi bi-pencil"></i></a>
        </mdb-col>
      </mdb-col>
    </mdb-col>
  </mdb-row>
  </mdb-row>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data() {
    return {
      showTheForce: false,
    };
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
