<script>
	import { stores } from '@sapper/app';

	const { page, session } = stores();

	export let segment;
</script>

<style>
</style>

<div class="ui medium top menu transition visible"  >
	<div class="ui container">
	<a class="item {segment === undefined ? 'active' : undefined}" href="/">
		<i class="home icon"></i>Home</a>
	<a class="item {segment === 'about' ? 'active' : undefined}" href="/about">
		<i class="info icon"></i>About</a>
	<a rel=prefetch class="item {segment === 'blog' ? 'active' : undefined}" href="/blog">
		<i class="blog icon"></i>Blog</a>
	{#if $session.user}
	<div class="right menu">
		<a rel='prefetch' class="item {segment === 'editor' ? 'active' : undefined}" href="/editor">
			<i class="edit icon"></i>&nbsp;New Post
		</a>

		<a rel='prefetch' class="item {segment === 'settings' ? 'active' : undefined}" href="/settings">
			<i class="settings icon"></i>&nbsp;Settings
		</a>

		<a rel='prefetch' class="item {segment === 'profile' ? 'active' : undefined}" href='/profile/@{$session.user.username}'>
			<i class="user icon"></i>&nbsp;{$session.user.username}
		</a>
	</div>
	{:else}
		<div class="right menu">
			<div class="item">
				<a class="ui button" rel='prefetch' href="login" class:active="{$page.path === '/login'}">
					Sign in
				</a>
			</div>
			<div class="item">
				<a class="ui primary button" rel='prefetch' href="register" class:active="{$page.path === '/register'}">
					Sign up
				</a>
			</div>
		</div>
	{/if}
	</div>
</div>
