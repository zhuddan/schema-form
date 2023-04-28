<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    schema-form.vue
    name is {{ name }}
  </div>
</template>

<style scoped>

</style>