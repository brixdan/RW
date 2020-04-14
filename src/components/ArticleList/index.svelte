<script>
	import { stores } from '@sapper/app';
	import ArticlePreview from './ArticlePreview.svelte';
	import ListPagination from './ListPagination.svelte';
	import * as api from 'api.js';

	export let tab, username = false;
	export let favorites = false;
	export let tag;
	export let p;

	const { session, page } = stores();

	let query;
	let articles;
	let articlesCount;

	$: {
		const endpoint = tab === 'feed' ? 'articles/feed' : 'articles';
		const page_size = tab === 'feed' ? 5 : 10;

		let params = `limit=${page_size}&offset=${(p - 1) * page_size}`;
		if (tab === 'tag') params += `&tag=${tag}`;
		if (tab === 'profile') params += `&${favorites ? 'favorited' : 'author'}=${encodeURIComponent(username)}`;

		query = `${endpoint}?${params}`;
	}

	$: query && getData();

	async function getData() {
		articles = null;

		// TODO do we need some error handling here?
		({ articles, articlesCount } = await api.get(query, $session.user && $session.user.token));
	}
</script>
<div class="ui relaxed divided list">
{#if articles}
	{#if articles.length === 0}
		<div class="ui label warning">
			No articles are here... yet.
		</div>
	{:else}
	<div class="ui three stackable cards">
			{#each articles as article (article.slug)}
				<ArticlePreview {article} user={$session.user}/>
			{/each}
	</div>
			<ListPagination {articlesCount} page={p}  />

	{/if}
{:else}
	<div class="ui active centered inline loader"></div>
{/if}
</div>
