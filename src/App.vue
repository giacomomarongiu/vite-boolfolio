<script>

import axios from 'axios';

import ProjectCard from "../src/components/ProjectCard.vue";

export default {
  name: 'App',
  components: {
    ProjectCard,
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_projects_url: '/api/projects',
      projects: [],
      //loading: true
    }
  },
  methods: {

    /**Mi permette di effettuare una chiama API al mio server locale con il parametro che passo in pagina
     * 
     * @param {string} page 
     */
    goTo(page) {
      //console.log(page);
      //Sfrutto callAPI
      this.callAPI(page)
    },

    /**Mi permette di effettuare una chiama API al mio server locale
 * 
 * @param {string} url 
 */
    callAPI(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.projects = response.data.projects
          //this.loading = false
          //console.log(response.data.projects);
        })
        .catch(err => {
          console.error(err);
        })
    }
  },

  mounted() {
    //Chiamo la funzione nel Mounted per avere già dati in pagina
    let url = this.base_api_url + this.base_projects_url
    this.callAPI(url);
  }
}

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-primary mb-3">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">My portfolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
          aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarID">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>

          </div>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <h2 class="text-center m-5">Welcome, let's see my projects</h2>
    <div class="container">
      <div class="row g-4">

        <!--Ciclo all'interno del mio array, ho bisogno del .data perché il resto del mio array associativo mi da altre info-->
        <ProjectCard :project="project" v-for="project in projects.data"></ProjectCard>
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination    ">

          <!--Viaggio all'interno delle pagine richiamando il metodo goTo che a sua volta richiama il metodo callApi-->
          <!--Prev-->
          <li class="page-item" v-show="projects.prev_page_url" @click="goTo(projects.prev_page_url)">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          <!--Next-->
          <li class="page-item" v-show="projects.next_page_url" @click="goTo(projects.next_page_url)">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>

        </ul>
      </nav>
    </div>


  </main>

  <footer>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid d-flex justify-content-center">
        <a class="navbar-brand" href="#">Copyright 2024 - Giacomo Marongiu @119</a>
      </div>
    </nav>
  </footer>
</template>

<style scoped></style>
