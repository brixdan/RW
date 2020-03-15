<script>
	import { goto } from '@sapper/app';
	import ArticleList from '../../components/ArticleList/index.svelte';
	import * as api from 'api.js';

	export let profile;
	export let favorites;
	export let user;

	$: isUser = user && (profile.username === user.username);

	async function toggleFollowing() {
		if (!user) return goto('/login');

		// optimistic UI
		profile.following = !profile.following;

		({ profile, favorites } = await (profile.following
			? api.post(`profiles/${profile.username}/follow`, null, user && user.token)
			: api.del(`profiles/${profile.username}/follow`, user && user.token)));
	}
</script>

<svelte:head>
	<title>{profile.username} • Conduit</title>
</svelte:head>

<div class="ui one column grid container">
	<div class="grey column centered">
					<img src={profile.image} class="ui image tiny centered" alt={profile.username} />
					<div class="ui header medium centered">{profile.username}</div>
					<div class="ui header small centered">{profile.bio}</div>
		            <div class="right floated column">
<!--						Still works. Probably some predefined by sapper.-->
					{#if isUser}
						<a href="/settings" class="ui small button right floated">
							<i class="ui icon cog"></i> Edit Profile Settings
						</a>
					{:else}
						<button
							class='ui small button right floated {profile.following ? "secondary" : ""}'
							on:click='{toggleFollowing}'
						>
							<i class="icon plus"></i>
							{profile.following ? 'Unfollow' : 'Follow'} {profile.username}
						</button>
					{/if}
					</div>
	</div>

	<div class="column">
	<div class="ui tabular menu">
		<a href='/@{profile.username}' class="item {favorites ? '' : 'active'}">My Articles</a>
		<a class="item {favorites ? 'active' : ''}" href='/@{profile.username}/favorites'>Favorited Articles</a>
	</div>
	<ArticleList tab='profile' username='{profile.username}' {favorites}/>
	</div>
</div>
