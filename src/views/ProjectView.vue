<template>
  <div class="wrapper d-flex" style="display: flex; text-align: center; gap: 2em; flex-direction: column;">
    <h1>My Projects</h1>
    <div class="wrapper d-flex flex-wrap justify-content-center">
      <div class="wrapper project-card-container">
        <div
          class="wrapper panel panel-primary w-75"
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="panel panel-heading">
            <h1 class="panel-title">{{ project.title }}</h1>
          </div>
          <img
            v-if="project.image"
            :src="project.image"
            class="card-img-top"
            alt="Project image"
          />
          <div class="panel panel-body">
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-primary btn-lg" target="_blank">Go to project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      projects: [
        {
          title: "arxiv-scraper",
          description: "A CLI tool for scraping research paper data from arXiv including titles, abstracts, authors, and downloading PDFs in bulk.",
          link: "https://github.com/ZZIDZZ/arxiv-scraper"
        },
        {
          title: "bad-apple-discord",
          description: "Play the iconic 'Bad Apple' video in ASCII art inside a Discord channel using a bot. A fun blend of media and automation.",
          link: "https://github.com/ZZIDZZ/bad-apple-discord"
        },
        {
          title: "inpopalo-aim-augment",
          description: "An experimental Valorant aim tracking project using YOLOv5. Designed for data-driven analysis and augmentation of FPS aiming behavior.",
          link: "https://github.com/ZZIDZZ/inpopalo-aim-augment",
          image: "https://github.com/ZZIDZZ/inpopalo-aim-augment/blob/master/Screenshot%202025-03-31%20at%203.36.38%20PM.png?raw=true"
        },
        {
          title: "llm-ingest-chromadb",
          description: "A document ingestion pipeline that processes and stores various file formats into ChromaDB for local LLM retrieval-based QA.",
          link: "https://github.com/ZZIDZZ/llm-ingest-chromadb"
        },
        {
          title: "YOLOX-DeepSort-ANPR",
          description: "Automatic Number Plate Recognition (ANPR) using YOLOX for detection, DeepSort for tracking, and Tesseract OCR for plate reading.",
          link: "https://github.com/ZZIDZZ/YOLOX-DeepSort-ANPR",
          image: "https://github.com/ZZIDZZ/YOLOX-DeepSort-ANPR/blob/main/assets/tokyocut.gif?raw=true"
        },
        {
          title: "FlappyBird-WebGL",
          description: "A Flappy Bird clone built in Unity and exported to WebGL. Fully playable in browser with smooth physics and retro fun.",
          link: "https://github.com/ZZIDZZ/FlappyBird-WebGL"
        },
        {
          title: "ppe-detection",
          description: "Computer vision model for detecting PPE (safety helmets, vests) in industrial environments using YOLOv8.",
          link: "https://github.com/ZZIDZZ/ppe-detection",
          image: "https://github.com/ZZIDZZ/YOLOv8-Streamlit-APD/blob/master/weights/model_017/val_batch0_pred.jpg?raw=true"
        },
        {
          title: "setup-scripts",
          description: "A collection of bash and shell scripts to quickly set up development environments, including server provisioning and dotfiles.",
          link: "https://github.com/ZZIDZZ/setup-scripts"
        },
        {
          title: "ctf-payload-scripts",
          description: "A curated collection of payloads and scripts for Capture The Flag (CTF) challenges, with notes on vulnerabilities and exploits.",
          link: "https://github.com/ZZIDZZ/ctf-payload-scripts"
        }
      ]
    };
  }
};
</script>

<style>
.project-card-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
}

.card-text {
  font-size: 1.5em;
}

.panel-title {
  font-size: 2em;
}

.card-img-top {
  width: 100%;
  height: auto;
  margin-top: 1em;
}
</style>
