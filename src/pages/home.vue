<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
  <mdb-row class="align-items-center justify-content-center" style="min-height: 100vh">
    <mdb-col lg="3" sm="12" v-if="showTheForce == false">
      <mdb-row>
        <mdb-col col="12">
          <img :src="theForceBefore" class="img-fluid">
        </mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">
        <mdb-btn type="button" class="btn mt-2" style="background-color: #1F8AC0; color: #104C91" @click="showTheForce = true"><b>Use the Force</b></mdb-btn>
      </mdb-row>
    </mdb-col>
    <mdb-col lg="3" sm="12" v-if="showTheForce == true">
      <mdb-row>
        <mdb-col col="12">
          <img :src="theForceAfter" class="img-fluid">
        </mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">
        <mdb-btn type="button" class="btn mt-2" style="background-color: #1F8AC0; color: #104C91" @click="showTheForce = false"><b>End the Force</b></mdb-btn>
      </mdb-row>
    </mdb-col>
    <mdb-col lg="3" sm="12">
      <mdb-row class="mb-4">
        <mdb-col col="12">
          <h1 class="text-center text-nowrap" style="color:#104C91"><span class="mr-3"><b>M E L I S S A</b></span><span class="ml-3"><b>P U L A</b></span></h1>
          <h5 class="text-center text-nowrap" style="color:#104C91">Mother. Wife. Nerd.</h5>
        </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
  </template>

  <script>
  import image1 from "../assets/theforceafter.jpg"
  import image2 from "../assets/theforcebefore.jpg"
  export default {
    name: "Home",
    data() {
      return {
        showTheForce: false,
        theForceAfter: image1,
        theForceBefore: image2,
      };
    },
    methods: {
      goToPage(){
        console.log("goToPage works");
        this.$router.push('/about');
      }
    },
  }
  </script>

  <style scoped>

  </style>