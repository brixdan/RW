<script>
	export let segment;
</script>

<style>
</style>

<div class="ui three item right aligned menu">
	<a class="item {segment === undefined ? 'active' : undefined}" href=".">home</a>
	<a class="item {segment === 'about' ? 'active' : undefined}" href="about">about</a>
	<a rel=prefetch class="item {segment === 'blog' ? 'active' : undefined}" href="blog">blog</a>
</div>
