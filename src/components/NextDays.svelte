<script>
  export let data

  function handleDay(pureDate) {
    const date = pureDate
    const formatedDate = new Date(date)
    
    if (formatedDate.getDay() === 0) return 'Lunes'
    if (formatedDate.getDay() === 1) return 'Martes'
    if (formatedDate.getDay() === 2) return 'Miercoles'
    if (formatedDate.getDay() === 3) return 'Jueves'
    if (formatedDate.getDay() === 4) return 'Viernes'
    if (formatedDate.getDay() === 5) return 'Sábado'
    if (formatedDate.getDay() === 6) return 'Domingo'
  }
</script>

<div>
  <h2>Próximos dias</h2>
  <div class="results">
    {#each data.forecastday as day}
      <div class="result-day">
        <p>
          {handleDay(day.date)}
        </p>
        <img src={day.day.condition.icon} alt={day.day.condition.text}>
        <p>{`${Math.round(day.day.mintemp_c)}°C / ${Math.round(day.day.maxtemp_c)}°C`}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  div {
    margin-top: 20px;
    /* padding: 20px; */
  }

  .results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .result-day {
    min-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 10px;
  }
</style>