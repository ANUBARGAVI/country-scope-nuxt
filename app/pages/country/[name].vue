<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-100 to-white py-8">
    <div class="container mx-auto px-4">
      <!-- Back to Explorer Link -->
      <NuxtLink to="/explorer" class="text-blue-700 hover:text-blue-600 font-medium underline">← Back to Explorer</NuxtLink>

      <!-- Country Details Section -->
      <div v-if="country" class="mt-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div class="flex flex-col md:flex-row gap-6 items-center">
          <img :src="country.flags.svg" alt="Country Flag" class="w-48 h-32 object-cover rounded-md shadow-md" />

          <div class="flex flex-col justify-between space-y-4">
            <h1 class="text-3xl font-bold text-blue-800">{{ country.name.common }}</h1>
            <p class="text-gray-600"><strong>Official Name:</strong> {{ country.name.official }}</p>
            <p class="text-gray-600"><strong>Region:</strong> {{ country.region }}</p>
            <p class="text-gray-600"><strong>Subregion:</strong> {{ country.subregion }}</p>
            <p class="text-gray-600"><strong>Capital:</strong> {{ country.capital?.[0] }}</p>
            <p class="text-gray-600"><strong>Population:</strong> {{ country.population.toLocaleString() }}</p>
            <p class="text-gray-600"><strong>Area:</strong> {{ country.area.toLocaleString() }} km²</p>
            <p class="text-gray-600"><strong>Languages:</strong> {{ languages }}</p>
            <p class="text-gray-600"><strong>Currency:</strong> {{ currency }}</p>
            <p class="text-gray-600"><strong>Timezone(s):</strong> {{ timezones }}</p>
            <p class="text-gray-600"><strong>Calling Code:</strong> +{{ callingCode }}</p>
            <p class="text-gray-600"><strong>Top-Level Domain:</strong> {{ country.tld?.[0] }}</p>
            <p class="text-gray-600"><strong>Independent:</strong> {{ country.independent ? 'Yes' : 'No' }}</p>
            <p class="text-gray-600"><strong>UN Member:</strong> {{ country.unMember ? 'Yes' : 'No' }}</p>
            <p class="text-gray-600"><strong>Google Maps:</strong>
              <a :href="country.maps.googleMaps" target="_blank" class="text-blue-600 hover:text-blue-500">View Map</a>
            </p>
          </div>
        </div>

        <!-- Weather Section -->
        <div v-if="weather" class="mt-8 flex items-center gap-4 bg-blue-50 rounded-lg p-6 shadow-md">
          <img :src="weather.icon" alt="Weather Icon" class="w-16 h-16" />
          <div>
            <p class="text-lg text-gray-800 font-semibold">Weather in {{ country.name.common }}:</p>
            <p class="text-gray-700 text-lg"><strong>Temperature:</strong> {{ weather.temp }}°C</p>
            <p class="text-gray-700"><strong>Conditions:</strong> {{ weather.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="text-center text-lg text-gray-600 mt-20">Loading country details...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getWeather } from '@/composables/useWeather.js'

const route = useRoute()
const country = ref(null)
const weather = ref(null)
const currency = ref('')
const languages = ref('')
const timezones = ref('')
const callingCode = ref('')

onMounted(async () => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${route.params.name}?fullText=true`)
  const data = await res.json()
  country.value = data[0]

  // Currency
  if (country.value?.currencies) {
    const key = Object.keys(country.value.currencies)[0]
    const data = country.value.currencies[key]
    currency.value = `${key} - ${data.name} (${data.symbol})`
  }

  // Languages
  if (country.value?.languages) {
    languages.value = Object.values(country.value.languages).join(', ')
  }

  // Timezones
  timezones.value = country.value.timezones?.join(', ') || ''

  // Calling code
  if (country.value?.idd) {
    callingCode.value = `${country.value.idd.root}${country.value.idd.suffixes?.[0]}`
  }

  // Weather
  if (country.value?.latlng) {
    weather.value = await getWeather(country.value.latlng[0], country.value.latlng[1])
  }
})
</script>