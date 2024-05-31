
<script>
import AppHeader from "../src/components/AppHeader.vue";
import AppFooter from "../src/components/AppFooter.vue";
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}

</script>

<template>
<!--   <AppHeader></AppHeader> -->
  <main>
    <RouterView></RouterView>
  </main>

<!-- <AppFooter></AppFooter> -->
</template>

<style scoped></style>
