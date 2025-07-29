<template>
  <ProductCard
    productName="Wireless Mouse"
    :price="899"
    :inStock="true"
    imageUrl="https://i.pravatar.cc/150?img=3"
     @add-to-cart="handleAddToCart"
  />
</template>

<script setup>
import ProductCard from './practice-projects/ProductCard.vue'
</script>

<style scoped></style>
