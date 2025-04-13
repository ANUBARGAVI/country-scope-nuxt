<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <nav class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 ">
    <div class="flex items-center justify-between text-white">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold tracking-wide hover:text-yellow-600">
         🌍 CountryScope
      </NuxtLink>

      <!-- Hamburger Icon (mobile) -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-2xl focus:outline-none"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- Nav Links (desktop) -->
      <ul class="hidden md:flex gap-6 text-base font-medium">
        <li>
          <NuxtLink to="/" class="text-white transition  hover:text-yellow-600">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-white transition  hover:text-yellow-600">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/explorer" class="text-white transition  hover:text-yellow-600">Explorer</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Nav Links (mobile dropdown) -->
    <ul
      v-if="isOpen"
      class="md:hidden mt-4 space-y-2 text-orange-800 font-medium"
    >
      <li>
        <NuxtLink to="/" class="block text-white  hover:text-yellow-600">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="block text-white  hover:text-yellow-600">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/explorer" class="block text-white  hover:text-yellow-600">Explorer</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
