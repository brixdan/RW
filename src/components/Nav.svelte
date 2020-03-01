<script>
	import { stores } from '@sapper/app';

	const { page, session } = stores();

	export let segment;
</script>

<style>
</style>

<div class="ui five item right aligned menu">
	<a class="item {segment === undefined ? 'active' : undefined}" href=".">home</a>
	<a class="item {segment === 'about' ? 'active' : undefined}" href="about">about</a>
	<a rel=prefetch class="item {segment === 'blog' ? 'active' : undefined}" href="blog">blog</a>
	{#if $session.user}
		<li class="item">
			<a rel='prefetch' href="/editor" class="nav-link" class:active="{$page.path === '/editor'}">
				<i class="ion-compose"></i>&nbsp;New Post
			</a>
		</li>

		<li class="item">
			<a rel='prefetch' href="/settings" class="nav-link" class:active="{$page.path === '/settings'}">
				<i class="ion-gear-a"></i>&nbsp;Settings
			</a>
		</li>

		<li class="item">
			<a rel='prefetch' href='/profile/@{$session.user.username}' class="nav-link">
				<!-- <img src={$user.image} class="user-pic" alt={$user.username}> -->
				{$session.user.username}
			</a>
		</li>
	{:else}
			<a rel='prefetch' class="item" href="/login" class:active="{$page.path === '/login'}">
				sign in
			</a>
			<a rel='prefetch' class="item" href="/register" class:active="{$page.path === '/register'}">
				sign up
			</a>
	{/if}
</div>
