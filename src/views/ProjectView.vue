<template>
  <div class="wrapper" style="display: flex; text-align: center; gap: 2em; flex-direction: column;">
    <h1>My Projects</h1>
    <div class="container">
      <div class="wrapper project-card-container">
        <div class="container card project-card">
          <img src="https://www.bhsk.dev/_next/image?url=%2Fportfolio%2Fmonoxide.webp&w=640&q=75" class="card-img-top">
          <div class="card-body project-card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="container card project-card">
          <img src="https://www.bhsk.dev/_next/image?url=%2Fportfolio%2Fmonoxide.webp&w=640&q=75" class="card-img-top">
          <div class="card-body project-card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .project-card-container{
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  
  .project-card{
    width: 75rem;
    fill: #666666;
    color: #666666;
  }
  
  .card-body{
    fill: #666666;
    color: #666666;
  }
</style>
