<template>
  <mdb-container class="h-100 m-0 p-0 mb-0" fluid>
      <mdb-navbar color="default" class="white-text" dark>
        <mdb-navbar-brand href="https://mdbootstrap.com/"><router-link style="color: white" to="/">Melissa Pula</router-link>
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item active><router-link to="/" class="mr-3 white-text" active>Home<mdb-icon icon="home" class="ml-2"></mdb-icon></router-link></mdb-nav-item>
            <mdb-nav-item><router-link to="/about" class="mr-3 white-text">About<mdb-icon icon="user" class="ml-2"></mdb-icon></router-link></mdb-nav-item>
            <mdb-nav-item><router-link to="/resume" class="mr-3 white-text">Resume<mdb-icon icon="file-alt" class="ml-2"></mdb-icon></router-link></mdb-nav-item>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle tag="a" navLink color="default" slot="toggle" waves-fixed>Work Examples<mdb-icon icon="laptop" class="ml-2"></mdb-icon></mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <mdb-dropdown-item><router-link to="fishCreek">Fish Creek</router-link></mdb-dropdown-item>
                <mdb-dropdown-item><router-link to="pacific">Pacific</router-link></mdb-dropdown-item>
                <mdb-dropdown-item><router-link to="javaJam">Java Jam</router-link></mdb-dropdown-item>
                <mdb-dropdown-item><router-link to="hangman">Hangman</router-link></mdb-dropdown-item>
                <mdb-dropdown-item><router-link to="bugsGame">Bugs Game</router-link></mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle tag="a" navLink color="default" slot="toggle" waves-fixed>Blog<mdb-icon icon="blog" class="ml-2"></mdb-icon></mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <mdb-dropdown-item><router-link to="parentingBlog">Parenting</router-link></mdb-dropdown-item>
                <mdb-dropdown-item><router-link to="fitnessBlog">Fitness</router-link></mdb-dropdown-item>
                <!--<mdb-dropdown-item><router-link to="travelBlog">Travel</router-link></mdb-dropdown-item>-->
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
          <!--<form>
            <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
          </form>-->
        </mdb-navbar-toggler>
      </mdb-navbar>
    <router-view/>
  </mdb-container>
</template>

<script>

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  watch: {
    $route() {
      this.$refs.scroll.$el.scrollTop = 0;
    }
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
.ps {
  height: 100vh;
}
</style>
