<template>
  <div class="relative h-screen overflow-hidden">
    <!-- 🌍 Video Background -->
    <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src="/world.mp4" type="video/mp4" />
    </video>

    <!-- 🔍 Search + Explore Overlay -->
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/50 backdrop-blur-sm">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-lg transition-all duration-500 hover:scale-105">
  Explore the World
</h1>


      

      <!-- Explore Button -->
      <NuxtLink
  :to="{ path: '/explorer', query: { search: searchTerm } }"
  class="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold border-2 border-blue-400 hover:bg-blue-400 hover:text-white hover:border-yellow-300 transition"
>
  🌍 Explore
</NuxtLink>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchTerm = ref('')
</script>
