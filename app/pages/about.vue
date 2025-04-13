<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-6 flex items-center">
    <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-10 flex flex-col space-y-8">
      
      <!-- About Content -->
      <div class="space-y-4">
        <h1 class="text-4xl font-bold text-blue-600 mb-6 text-center">About CountryScope</h1>
        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <p class="text-lg text-gray-700 mb-4">
            <strong>Welcome to CountryScope! 🌍</strong>
          </p>
          <p class="text-lg text-gray-700 mb-4">
            CountryScope is your go-to platform for exploring detailed information about countries around the world.
            Whether you're an enthusiast of geography, planning a trip, or just curious about the world, CountryScope provides you with in-depth details about countries, including:
          </p>
          <ul class="list-disc pl-6 mb-6">
            <li><strong>General Information:</strong> Learn about each country’s name, capital, region, and population.</li>
            <li><strong>Geographical Data:</strong> View country flags, maps, and area size in square kilometers.</li>
            <li><strong>Languages & Currency:</strong> Discover the official languages and currency used in each country.</li>
            <li><strong>Weather Information:</strong> Stay updated with real-time weather conditions, including temperature, weather description, and more.</li>
            <li><strong>Timezones & Calling Codes:</strong> Easily find timezones and calling codes for your global communication needs.</li>
          </ul>
          <p class="text-lg text-gray-700 mb-4">
            CountryScope aims to make it easy for you to learn more about the world around you with simple, interactive details on every country.
          </p>
        </div>
      </div>

      <!-- Mission Box -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 class="text-2xl font-semibold text-blue-600 mt-8 mb-4">Our Mission</h2>
        <p class="text-lg text-gray-700 mb-4">
          At <strong>CountryScope</strong>, we aim to create a user-friendly and intuitive experience for anyone curious about the diverse countries of the world. From students and travelers to armchair explorers, our platform is designed to provide valuable insights in a simple, interactive way.
        </p>
      </div>

          <!-- Video Background -->
          <div class="w-full relative bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <video 
          class="w-full h-full object-cover"
          autoplay
          loop
          muted
        >
          <source src="/earth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Why CountryScope Box -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 class="text-2xl font-semibold text-blue-600 mt-8 mb-4">Why CountryScope?</h2>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Real-Time Data:</strong> Always have access to the most accurate and up-to-date country information.</li>
          <li><strong>Easy-to-Use Interface:</strong> With a clean, straightforward interface, you can explore countries effortlessly and learn interesting facts in just a few clicks.</li>
          <li><strong>Mobile-Friendly:</strong> Whether you're at home or on the go, CountryScope is fully responsive, so you can explore country details from any device.</li>
        </ul>
      </div>

      <!-- Get Started Box -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 class="text-2xl font-semibold text-blue-600 mt-8 mb-4">Get Started!</h2>
        <p class="text-lg text-gray-700">
          Explore countries, discover new places, and deepen your knowledge about the world with <strong>CountryScope</strong>. Start by searching for a country, or browse through our collection and view details on demand!
        </p>
      </div>

    
    </div>
  </div>
</template>



<style scoped>

.video-container {
  position: relative;
  height: 450px;
  overflow: hidden;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

h1, h2 {
  text-align: center;
  font-weight: bold;
}

ul {
  margin-left: 1.5rem;
}

ul li {
  line-height: 1.8;
}
</style>
