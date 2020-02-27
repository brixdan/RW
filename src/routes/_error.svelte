<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="ui header large red">{status}</div>

<div class="ui label large">{error.message}</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
