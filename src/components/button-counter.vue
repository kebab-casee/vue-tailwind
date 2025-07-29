<template>
  <button
    class="p-2 bg-amber-400 rounded-md ml-0.5 cursor-pointer text-white"
    @click="increment"
  >
    Clicked
    <span class="text-black font-bold">{{ count }}</span>
    times
  </button>
</template>

<script setup>

let count = ref(0);

function increment() {
  return count.value++;
}
</script>
