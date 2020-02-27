<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="ui header medium">Recent posts</div>

<div class="ui grid stackable two column">
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<div class="ui column"><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></div>
	{/each}
</div>
