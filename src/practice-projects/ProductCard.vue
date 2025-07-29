<template>
  <div
    class="container p-4 rounded shadow text-center"
    :class="{ 'bg-gray-200 opacity-50': !props.inStock, 'bg-white': props.inStock }"
  >
    <img :src="props.imageUrl" alt="Product Image" class="mx-auto mb-2 rounded" />
    <h1 class="font-bold text-xl mb-1">{{ props.productName }}</h1>
    <p class="text-lg">₱{{ props.price.toFixed(2) }}</p>
    <h2 class="mt-2">
      Status:
      <span
        :class="props.inStock ? 'text-green-600' : 'text-red-600'"
      >
        {{ props.inStock ? "✅ In Stock" : "❌ Out of Stock" }}
      </span>
    </h2>
    <button 
    @click="addToCart"
    :disabled="!props.inStock"
    class="bg-orange-400 hover:bg-orange-300 active:bg-amber-600 transition-all  px-8 py-0.5 rounded-2xl text-white cursor-pointer">Add to cart</button>
  </div>
</template>

<script setup>
const props = defineProps({
  productName: String,
  price: Number,
  inStock: Boolean,
  imageUrl: String,
});
</script>
