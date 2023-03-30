<template>
  <mdb-container class="h-100 m-0 p-0" fluid>
    <mdb-navbar color="default" class="white-text" dark>
      <mdb-navbar-brand href="https://mdbootstrap.com/"><router-link style="color: white" to="/">Melissa Pula</router-link>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item active><router-link to="/" class="mr-3 white-text" active>Home<mdb-icon icon="home" class="ml-2"></mdb-icon></router-link></mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <router-view/>
  </mdb-container>
</template>

<script>

export default {
  name: 'App',
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
