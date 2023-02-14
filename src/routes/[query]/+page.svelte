<script>
  export let data
</script>

<main>
  <div class={`card ${data.isDay === 1 ? 'day' : 'night'}`}>
    <div class="card-header">
      <div class="card-header-titles">
        <h2>{data.name}</h2>
        <h3>{data.country}</h3>
      </div>
      <div class="card-header-info">
        <img src={data.icon} alt="">
        <h2>{data.temp}ºC</h2>
      </div>
    </div>
    <div class="card-resume">
      <div>
        <p>{data.humidity}%</p>
      </div>
      <div>
        <p>{data.condition}</p>
      </div>
      <div>
        <p>{data.uv}</p>
      </div>
    </div>
    <p>Sensacion termica: {data.feelslike}ºC</p>
    <p>Velocidad del viento: {data.windSpeed} kph</p>
    <p>Direccion del viento: {data.windDir}</p>
    <p>Hora local: {data.localtime.split(' ')[1]}</p>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    
  }

  .card {
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, .25);
  }

  .card-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }

  .card-header:first-child {
    align-items: flex-end;
  }

  .card-header-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 8px;
  }

  .card-header-info h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  .card-header-info img {
    width: 80px;
  }

  .card-resume {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    font-size: 1.2rem;
  }

  .card-resume div {
    text-align: center;
  }

  .night {
    color: #ffffff;
    background-color: #1a445e87;
  }

  .day {
    background-color: #f1ca7d8a;
  }
</style>