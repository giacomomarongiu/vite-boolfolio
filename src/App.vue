<script>

import axios from 'axios';

import ProjectCard from "../src/components/ProjectCard.vue";

export default {
  name: 'App',

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
        <div class="collapse navbar-collapse " id="navbarID">
          <div class="navbar-nav text-light">
            <RouterLink class="text-light text-decoration-none p-1" :to="{ name: 'home' }">Home</RouterLink>
            <RouterLink class="text-light text-decoration-none p-1" :to="{ name: 'about' }">About</RouterLink>
            <RouterLink class="text-light text-decoration-none p-1" :to="{ name: 'blog' }">Blog</RouterLink>
            <RouterLink class="text-light text-decoration-none p-1" :to="{ name: 'contacts' }">Contacts</RouterLink>
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
