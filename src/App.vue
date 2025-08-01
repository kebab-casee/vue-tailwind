<script setup>
import { ref } from 'vue'
import axios from 'axios'

const users = ref([])
const loading = ref(false)

async function fetchUsers() {
  loading.value = true
  try {
    const res = await axios.get('https://api.com/users')
    users.value = res.data
  } catch (e) {
    console.error('Error loading users:', e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <button
  class="bg-red-300 m-100 p-2 text-white rounded-2xl cursor-pointer hover:bg-red-100 transition-all active:bg-amber-200"
  @click="fetchUsers">Load Users</button>
  <div
  class="-m-120 bg-amber-400"
  v-if="loading">Loading...</div>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
