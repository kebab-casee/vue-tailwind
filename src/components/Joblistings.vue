<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- dynamic data with v-for -->
        <Joblisting v-for="job in jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
</template>

<script setup>
import jobData from "../jobs.json";
import Joblisting from "../components/Joblisting.vue";

const jobs = ref(jobData);
</script>
