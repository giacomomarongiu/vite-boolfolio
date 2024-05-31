
<script>
import AppHeader from "../src/components/AppHeader.vue";
export default {
  name: 'App',
  components: {
    AppHeader,
  },
}

</script>

<template>
  <AppHeader></AppHeader>
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
