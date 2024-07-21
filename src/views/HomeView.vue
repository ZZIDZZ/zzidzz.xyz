<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="wrapper" style="display: block; text-align: center;">
    <h1>Hello!</h1>
    <div class="container">
      <p>Welcome to My Page</p>
    </div>
    <br>
    <div class="list-group">
      <!-- urls -->
      <a class="urltext list-group-item" href="https://zzidzz.xyz">Website</a>
      <a class="urltext list-group-item" href="https://github.com/ZZIDZZ">GitHub</a>
      <a class="urltext list-group-item" href="https://ctftime.org/team/169835">CTFTime</a>
      <!-- hackthebox -->
      <a class="urltext list-group-item" href="https://app.hackthebox.com/profile/780810">HackTheBox</a>
      <!-- medium -->
      <a class="urltext list-group-item" href="https://medium.com/@zidanutomo">Medium</a>
      <!-- linkedin -->
      <a class="urltext list-group-item" href="https://www.linkedin.com/in/zidanutomo">LinkedIn</a>

    </div>
    
  </div>
</template>

<style>
/* p font size */
p {
  font-size: 2.5rem;
}
.urltext{
  font-size: 2rem;
  margin: 0 10px;
}
.list-group {
  margin-bottom: 20px;
  padding-left: 0;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #3c3c3c;
    border: 1px solid #222;
}

/* hover, to active */
.list-group-item:hover {
    z-index: 1;
    text-decoration: none;
    color: #222;
    background-color: #0f0;
    border-color: #0f0;
}

.list-group-item-active {
    z-index: 2;
    color: #222;
    background-color: #0f0;
    border-color: #0f0;
}
</style>