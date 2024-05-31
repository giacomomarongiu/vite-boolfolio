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
            <RouterLink :to="{ name: 'home' }">Home</RouterLink>

          </div>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <RouterView></RouterView>
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
