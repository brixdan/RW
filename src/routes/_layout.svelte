<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
</style>

<Nav {segment}/>

<main class="ui container centered">
	<slot></slot>
</main>
