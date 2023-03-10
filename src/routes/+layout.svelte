<script>
  import { goto } from '$app/navigation'

  let search

  function handleSubmit(e) {
    e.preventDefault()

    goto(`/${search}`)
  }
</script>

<div class="container">
  <h1>¡Bienvenido!</h1>
  <h2>Consulta el clima del lugar que quieras</h2>
  <form method="#" on:submit={handleSubmit}>
    <input bind:value={search} type="text" placeholder="Ej: Santiago">
    <button>Buscar</button>
  </form>

  <slot></slot>
</div>

<style>
  :global(body) {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu mono';
    font-size: 16px;
    background-image: url('/images/city.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 80%;
    max-width: 1200px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(5px);
    border-radius: 16px;
  }

  h1 {
    font-size: 3.5rem;
    margin-top: 0;
  }

  input {
    width: 100%;
    max-width: 200px;
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 15px;
    border: 1px solid #070707;
  }

  button {
    font-size: 16px;
    padding: 6px 16px;
    border: none;
    border-radius: 15px;
    background-color: cadetblue;
    color: #f7f7f7;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(123, 203, 206)  }
</style>
