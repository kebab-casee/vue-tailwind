<template>
  <div class="container max-h-screen">
    <div class="flex items-center justify-center gap-5 h-screen">
      <div
        class="bg-cyan-400 w-md h-3/4 p-8 flex flex-col items-center rounded-lg"
      >
        <p class="font-semibold text-2xl">Learn Vue - MovieOPedia</p>

        <!-- Add Movie Form -->
        <form class="flex flex-col gap-2" @submit.prevent="addMovie">
          <label for="title">Title</label>
          <input
            class="mt-1 p-1.5 bg-white placeholder-gray-500 rounded-md focus:ring-blue-500 focus:outline-none focus:ring-2"
            type="text"
            id="title"
            placeholder="title"
            v-model="newMovie.name"
          />

          <label for="year">Year</label>
          <input
            type="text"
            id="year"
            placeholder="year"
            class="mt-1 bg-white rounded-md p-2 focus:outline-none focus:ring-blue-500 focus:ring-2"
            v-model="newMovie.year"
          />

          <button type="submit" class="bg-green-400 rounded-md">
            Add movie
          </button>
        </form>
        <button>jk</button>
        <!-- Movie List -->
        <p class="mt-20">Movie List</p>
        <h2 class="text-red-700 font-medium" v-if="movies.length === 0">
          No movies yet
        </h2>
        <ul>
          <li class="p-0.5" v-for="movie in movies" :key="movie.id">
            Title:{{ movie.name }} - Year: {{ movie.year }}
            <button
              class="bg-red-500 p-1 rounded-2xl text-white"
              @click="deleteMovie(movie.id)"
            >
              delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const movies = ref([{ id: 0, name: "gh", year: "4545" }]);
let nextId = 1;
const newMovie = ref({
  id: 0,
  name: "",
  year: "",
});

function addMovie() {
  if (!newMovie.value.name || !newMovie.value.year) return;
  movies.value.push({
    id: nextId++,
    name: newMovie.value.name,
    year: newMovie.value.year,
  });

  newMovie.value.name = "";
  newMovie.value.year = "";
}

function deleteMovie(id) {
  movies.value = movies.value.filter((movie) => movie.id !== id);
}
</script>
