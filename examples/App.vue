<script setup lang="ts">
import { Button, useButton } from '@zhudddan/schema-form';
const s = useButton('s');
</script>

<template>
  <div>
    button 测试：Button
    <Button type="danger">
      {{ s }}
    </Button>
  </div>
</template>

<style scoped>

</style>