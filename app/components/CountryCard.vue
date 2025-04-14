<script setup>
import { ref, onMounted } from 'vue'
import { getWeather } from '@/composables/useWeather'

const props = defineProps(['country'])

const weather = ref(null)

onMounted(async () => {
  if (props.country?.latlng?.length === 2) {
    weather.value = await getWeather(props.country.latlng[0], props.country.latlng[1])
  }
})
</script>

<template>
  <NuxtLink
    :to="`/country/${country.name.common}`"
    class="block bg-white shadow-md hover:shadow-lg rounded-lg transition duration-300 overflow-hidden"
  >
    <img
      :src="country.flags.svg"
      alt="flag"
      class="w-full h-40 object-cover"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-1">{{ country.name.common }}</h3>
      <p class="text-sm text-gray-600"><strong>Region:</strong> {{ country.region }}</p>
      <p class="text-sm text-gray-600"><strong>Capital:</strong> {{ country.capital?.[0] }}</p>

      <!-- Weather Preview -->
      <div v-if="weather" class="mt-2 text-sm text-gray-600">
        <p><strong>Weather:</strong> {{ weather.temp }}°C, {{ weather.desc }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
