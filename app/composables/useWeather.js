// composables/useWeather.js
export async function getWeather(lat, lon) {
  const API_KEY = 'b2f252addf6e5738782a4a485a620f93'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  try {
    const res = await fetch(url)
    const data = await res.json()

    if (!res.ok || !data.main || !data.weather?.[0]) {
      throw new Error('Invalid weather data')
    }

    return {
      temp: data.main.temp,
      desc: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }
  } catch (error) {
    console.error('Weather API error:', error.message)
    return null
  }
}
