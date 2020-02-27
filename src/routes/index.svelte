<script>

const toggleRed = () => {
	jQuery('.header').toggleClass('my');
}

</script>
<style>
	.my {
		color: blue;
	}
	.ui.header.red.my {
		color: yellow;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="ui header red my" >Great success!</div>
<div class='ui button centered' on:click={toggleRed}>Click Me</div>

<figure>
	<img class="ui image small" alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
