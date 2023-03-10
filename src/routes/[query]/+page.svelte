<script>
	import Card from "../../components/Card.svelte";
	import NextDays from "../../components/NextDays.svelte";

  export let data
</script>


<main>
  <Card  data={data}/>
  <NextDays data={data} />
</main>

<style>
  main {
    display: flex;
    margin-top: 40px;
    gap: 50px;
    /* justify-content: center; */
  }

  @media (max-width: 620px) {
    main {
      flex-direction: column;
    }
  }
</style>