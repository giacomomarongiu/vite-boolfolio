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
    let url = this.base_api_url + this.base_projects_url
    this.callAPI(url);
  }
}

</script>

<template>
  <main>
    <div class="container">
      <div class="row">

        <ProjectCard :project="project" v-for="project in projects.data"></ProjectCard>

      </div>
    </div>


  </main>
</template>

<style scoped></style>
