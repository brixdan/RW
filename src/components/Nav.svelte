<script>
	import { stores } from '@sapper/app';

	const { page, session } = stores();

	export let segment;
</script>

<style>
</style>

<div class="ui medium top menu transition visible"  >
	<div class="ui container">
	<a class="item {segment === undefined ? 'active' : undefined}" href=".">Home</a>
	<a class="item {segment === 'about' ? 'active' : undefined}" href="about">About</a>
	<a rel=prefetch class="item {segment === 'blog' ? 'active' : undefined}" href="blog">Blog</a>
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
