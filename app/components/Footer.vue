<template>
    <footer class="bg-blue-600 text-white py-6 mt-12 border-t-4 border-blue-700">
      <div class="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between md:flex-row">
        
        <!-- Footer Logo and Description -->
        <div class="text-center md:text-left mb-4 md:mb-0">
          <h1 class="text-3xl font-bold">CountryScope</h1>
          <p class="mt-2 text-lg">Explore countries, learn new facts, and more!</p>
        </div>
  
        <!-- Footer Navigation Links -->
        <div class="mt-4 md:mt-0 flex justify-center space-x-8">
          <a href="/" class="text-white hover:text-blue-200">Home</a>
          <a href="/about" class="text-white hover:text-blue-200">About</a>
          <a href="/explorer" class="text-white hover:text-blue-200">Explorer</a>
        </div>
  
        <!-- Footer Social Media Links -->
        <div class="mt-4 md:mt-0 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" class="text-white hover:text-blue-200">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="text-white hover:text-blue-200">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="text-white hover:text-blue-200">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
  
      <!-- Footer Copyright -->
      <div class="mt-6 pt-4 text-center">
        <p class="text-sm text-gray-300">&copy; 2025 CountryScope. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  footer {
    background-color: #1D4ED8; /* Same as navbar color (Blue-600) */
    border-top-width: 4px;
    border-color: #1E40AF; /* Slightly darker blue for the border */
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  
  footer .text-center {
    text-align: center;
  }
  
  footer .text-left {
    text-align: left;
  }
  
  footer .text-sm {
    font-size: 0.875rem;
  }
  
  footer .space-x-8 {
    gap: 2rem;
  }
  
  footer .space-x-6 {
    gap: 1.5rem;
  }
  </style>
  