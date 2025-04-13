<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Explore Countries</h2>

    
    <div class="flex gap-4 mb-6">
    
      <input
        type="text"
        v-model="search"
        placeholder="Filter countries by name..."
        class="p-2 border rounded w-full max-w-md"
      />

      <!-- Filter by Region -->
      <select
        v-model="selectedRegion"
        class="p-2 border rounded w-full max-w-md"
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>

    <!-- Country Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="country in filteredCountries"
        :key="country.name.common"
        class="relative group cursor-pointer transform transition-transform duration-300 hover:scale-105"
      >
        <CountryCard :country="country" />
        
        <!-- View Button -->
        <NuxtLink
          :to="`/country/${country.name.common}`"
          class="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          View Details
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import CountryCard from '@/components/CountryCard.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const search = ref('')
const selectedRegion = ref('') // To hold the selected region
const countries = ref([])

// Get search from query if passed from homepage
const route = useRoute()
search.value = route.query.search || ''

onMounted(async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  countries.value = await res.json()
})

// Filter countries by both search query and selected region
const filteredCountries = computed(() => {
  return countries.value.filter(c => {
    const matchesSearch = c.name.common.toLowerCase().includes(search.value.toLowerCase())
    const matchesRegion = selectedRegion.value ? c.region === selectedRegion.value : true
    return matchesSearch && matchesRegion
  })
})
</script>

<style scoped>
/* Hover effect on the country card */
.group:hover .country-card {
  transform: scale(1.05);
}

.group:hover .view-button {
  opacity: 1;
}
</style>
