export async function load({ params, fetch }) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '32d9cecd2emsh0d3c4600d93bbc1p18080ejsnc23ff179cb90',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${params.query}`, options)
    .then(response => response.json())
    .then(response => {
      const { current, location } = response
      const {
        condition, 
        temp_c,
        feelslike_c, 
        humidity, 
        is_day, 
        uv, 
        wind_kph, 
        wind_dir
      } = current
      const { country, localtime, name } = location
      const { code, text, icon } = condition

      return {
        temp: temp_c,
        feelslike: feelslike_c,
        humidity,
        isDay: is_day,
        uv,
        windSpeed: wind_kph,
        windDir: wind_dir,
        country,
        localtime,
        name,
        conditionCode: code,
        condition: text,
        icon
      }
    })
}