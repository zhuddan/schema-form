<script setup lang="ts">
defineOptions({
  name: 'layout',
});
</script>

<template>
  <section>
    <header>
      <h1>demo</h1>
    </header>
    <aside></aside>
    <main>
      <router-view />
    </main>
  </section>
</template>

<style scoped lang="scss">
  section{
    height: 100vh;
    header{
      height: 60px;
      overflow: hidden;
    }
  }
</style>