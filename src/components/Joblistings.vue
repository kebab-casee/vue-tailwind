<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- dynamic data with v-for -->
        <Joblisting v-for="job in jobs.slice(0,limit || jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <!-- button -->
   <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
      <a
        href="jobs.html"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
</template> 

<script setup>
import jobData from "../jobs.json";
import Joblisting from "../components/Joblisting.vue";

const jobs = ref(jobData);

defineProps({
  limit:Number,
  showButton: {
    type: Boolean,
    default: false
  }
})
</script>
