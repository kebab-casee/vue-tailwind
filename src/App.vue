<template></template>

<script setup lang="ts">
interface User {
  name: String;
  age: Number;
}

const props = defineProps<{
  user: User;
}>();
</script>

<style scoped></style>
