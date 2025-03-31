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


    <nav>
      <div class="container">
        <div class="header-links row centernavtext">
          <RouterLink to="/">
              <h2 class="text header-link">guest@zzidzz.xyz:~$</h2>
          </RouterLink>
        </div>
        <div class="header-links row" >
          <div class="col centernavtext">
            <RouterLink to="/about">
              <h3 class="header-link">About</h3>
            </RouterLink>
          </div>
          <div class="col centernavtext">
            <RouterLink to="/projects">
              <h3 class="header-link">Projects</h3>
            </RouterLink>
          </div>
          <div class="col centernavtext">
            <RouterLink to="/info">
              <h3 class="header-link">Info</h3>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

  

  <RouterView />

  <div class="container" style="display: flex; text-align: center; gap: 2em; flex-direction: column; margin-top: 5rem; margin-bottom: 5rem; font-size: larger;">
    <a href="https://zzidzz.xyz">2025 @ ZZIDZZ</a>
    <a href="mailto:zzidzz@zzidzz.xyz">mail: zzidzz@zzidzz.xyz</a>
  </div>
  

  
  </header>

  


</template>

<style scoped>
  
  .centernavtext {
    text-align: center;
  }

  
</style>