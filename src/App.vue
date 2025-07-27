<template>
  <div class="container max-h-screen">
    <div class="flex items-center justify-center gap-5 h-screen">
      <div
        class="bg-cyan-400 w-md h-3/4 p-8 flex flex-col items-center rounded-lg"
      >
        <p class="font-semibold text-2xl">Learn Vue - MovieOPedia</p>
        <form class="flex flex-col gap-2" action="">
          <label for="title">Title</label>
          <input
            class="mt-1 p-1.5 bg-white placeholder-gray-500 rounded-md focus:ring-blue-500 focus:outline-none focus:ring-2"
            type="text"
            id="title"
            placeholder="title"
          />
          <label for="year">Year</label>
          <input
            type="text"
            name=""
            id="year"
            placeholder="year"
            class="mt-1 bg-white rounded-md p-2 focus:outline-none focus:ring-blue-500 focus:ring-2"
          />
          <button type="submit" class="bg-green-400 rounded-md">Submit</button>
        </form>
        <p class="mt-20">Movie List</p>
        <ul>
          <li v-for="item in movie" :key="item.title">
            Title: {{ item.title }} Year: {{ item.year }}
            <button 
            class="bg-red-500 p-1 rounded-2xl">delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const movie = reactive([
  { title: "Movie 1", year: 2000 },
  { title: "Movie 2", year: 2001 },
]);

const newMovie = reactive([{ title: "", year: "" }]);
</script>

<style></style>
