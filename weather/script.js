
// Open-Meteo geocoding + current weather
document.addEventListener('DOMContentLoaded', ()=>{
  document.body.classList.add('page-loaded');
  const searchForm = document.getElementById('search-form');
  const cityInput = document.getElementById('city-input');
  const resultBox = document.getElementById('weather-result');
  const errorBox = document.getElementById('weather-error');

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;
    resultBox.innerHTML = 'Searching...';
    errorBox.textContent = '';
    try {
      // Geocoding
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
      const geo = await geoRes.json();
      if (!geo.results || geo.results.length === 0) {
        resultBox.innerHTML = '';
        errorBox.textContent = 'City not found.';
        return;
      }
      const place = geo.results[0];
      const lat = place.latitude;
      const lon = place.longitude;
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh`);
      const weather = await weatherRes.json();
      const cw = weather.current_weather;
      resultBox.innerHTML = `
        <div><strong>${place.name}, ${place.country}</strong></div>
        <p class="small">Temperature: ${cw.temperature} °C</p>
        <p class="small">Wind Speed: ${cw.windspeed} km/h</p>
        <p class="small">Weather Code: ${cw.weathercode}</p>
        <p class="small">Time: ${cw.time}</p>
      `;
    } catch (err) {
      resultBox.innerHTML = '';
      errorBox.textContent = 'Error fetching weather.';
      console.error(err);
    }
  });
});
