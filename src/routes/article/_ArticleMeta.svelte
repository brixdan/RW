<script>
	import { goto } from '@sapper/app';
	import * as api from 'api.js';

	export let article;
	export let user;

	$: canModify = user && article.author.username === user.username;

	async function remove() {
		await api.del(`/articles/${article.slug}`, user && user.token);
		goto('/');
	}
</script>

<div class="ui horizontal list">
	<div class="item top aligned">
	<a href='/profile/@{article.author.username}'>
		<img class="ui top aligned mini circular image" src={article.author.image} alt={article.author.username}>
	</a>
	</div>
	<div class="item top aligned">
	<a href='/profile/@{article.author.username}' class="ui sub header"> {article.author.username}</a>
		{new Date(article.createdAt).toDateString()}
	</div>

	{#if canModify}
		<div class="item">
			<a href='/editor/{article.slug}' class="ui secondary button">
				<i class="ui icon edit"/> Edit Article
			</a>
		</div>
		<div class="item">
			<button class="ui button warning" on:click='{remove}'>
				<i class="ui icon trash"/> Delete Article
			</button>
		</div>
	{/if}
</div>
