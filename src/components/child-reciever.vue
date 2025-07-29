<template>
  <div>
    <h1>{{ props.title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({ title: String });
</script>

<style scoped></style>
