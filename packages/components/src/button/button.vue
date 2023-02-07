<script setup lang="ts">
import { defineProps } from 'vue';
import { buttonProps } from './types';
const props = defineProps(buttonProps);
</script>

<template>
  <button>
    {{ props.size }}
    {{ props.type }}
    <slot></slot>
  </button>
</template>

<style scoped>

</style>