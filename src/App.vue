<script setup>
  import {
    RouterLink,
    RouterView
  } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <header>
    <div class="container mt-5" style="display: inline; float: none;" >
        <a href="https://github.com/ZZIDZZ" style="display: flex; gap: 10px;">
            <img src="https://github.com/ZZIDZZ.png" alt="ZZIDZZ" class="circle img-thumbnail" style="width: 50px; height: 50px;">
            <h4 class="text">zzidzz@github.com</h4>
        </a>
    </div>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
    <link rel="stylesheet" href="https://brobin.github.io/hacker-bootstrap/css/hacker.css">

    <nav>
      <div class="container">
        <div class="header-links row centernavtext">
          <RouterLink to="/">
              <h2 class="text header-link">guest@zzidzz.xyz:~$</h2>
          </RouterLink>
        </div>
        <div class="header-links row" >
          <div class="col centernavtext">
            <RouterLink to="/projects">
              <h3 class="header-link">Projects</h3>
            </RouterLink>
          </div>
          <div class="col centernavtext">
            <RouterLink to="/personal">
              <h3 class="header-link">Personal Life</h3>
            </RouterLink>
          </div>
          <div class="col centernavtext">
            <RouterLink to="/about">
              <h3 class="header-link">About</h3>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  <RouterView />
  </header>


</template>

<style scoped>
  
  .centernavtext {
    text-align: center;
  }

  
</style>