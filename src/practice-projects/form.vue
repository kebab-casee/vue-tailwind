<template>
  <div class="container max-h-screen">
    <div class="flex items-center justify-center gap-5 h-screen">
      <div
        class="bg-cyan-400 w-md h-3/4 p-8 flex flex-col items-center rounded-lg gap-5"
      >
        <p class="font-semibold text-2xl">Learn Vue - Forms</p>

        <!-- Add Movie Form -->
        <form
          class="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
          @submit.prevent="handelSubmit"
        >
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              v-model="user.email"
              id="email"
              type="email"
              placeholder="you@example.com"
              class="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Name</label
            >
            <input
              v-model="user.name"
              id="name"
              type="name"
              class="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              v-model="user.password"
              id="password"
              type="password"
              class="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="flex items-center">
            <input
              v-model="user.isSubscrided"
              id="subscribe"
              type="checkbox"
              class="mr-2 p-2 border border-gray-300 rounded-md shadow-sm cursor-pointer"
            />
            <label for="subscribe" class="text-sm font-medium text-gray-700">
              Subscribe
            </label>
          </div>
          <label for="gender" class="block text-sm font-medium text-gray-700"
            >Gender</label
          >

          <select
            id="gender"
            v-model="user.gender"
            class="mt-1 w-full p-2 border rounded-md"
          >
            <option disabled value="">Please select</option>
            <option value="woman">Woman</option>
            <option value="man">Man</option>
            <option value="non-binary">Non-binary</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
            <option value="self-describe">Prefer to self-describe</option>
          </select>
          <input
            v-if="user.gender === 'self-describe'"
            v-model="user.genderDescription"
            type="text"
            class="mt-2 w-full p-2 border rounded-md"
            placeholder="Please describe your gender"
          />
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";

const user = reactive({
  email: "",
  name: "",
  password: "",
  isSubscrided: false,
  gender: "",
});

function handelSubmit() {
  console.log(user);
}
</script>
