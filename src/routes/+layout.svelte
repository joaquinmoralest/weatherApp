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
</div>

<slot></slot>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }

  .container {
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
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
