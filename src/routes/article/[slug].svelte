<script context="module">
	import * as api from 'api.js';

	export async function preload({ params }) {
		const { slug } = params;
		const { article } = await api.get(`articles/${params.slug}`, null);

		return { article, slug };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { stores } from '@sapper/app';
	import marked from 'marked';

	import ArticleMeta from './_ArticleMeta.svelte';
	import CommentContainer from './_CommentContainer.svelte';

	export let article;
	export let slug;

	const { session } = stores();

	let commentErrors, comments = []; // we'll lazy-load these in onMount
	$: markup = marked(article.body);

	onMount(() => {
		api.get(`articles/${slug}/comments`).then((res) => {
			comments = res.comments;
		});
	});
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<div class="ui one column grid container">
	<div class="ui column">
			<div class="ui header huge">{article.title}</div>
			<ArticleMeta {article} user={$session.user}/>
	</div>

	<div class="ui container">
				<div class="row">{@html markup}</div>
<!--		{console.log("article.tagList = ",article.tagList)}-->
		<div class="row">
		<div class="ui horizontal list">
			{#each article.tagList as tag}
				<div class="item">
					<div class="ui tag label">
						{tag}
					</div>
				</div>
			{/each}
		</div>
		</div>

		<hr />

		<div class="article-actions"></div>

		<div class="row">
			<CommentContainer {slug} {comments} user={$session.user} errors={commentErrors}/>
		</div>
	</div>
</div>
