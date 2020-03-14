<script>
	import * as api from 'api.js';

	export let article;
	export let user;

	async function toggleFavorite() {
		// optimistic UI
		if (article.favorited) {
			article.favoritesCount -= 1;
			article.favorited = false;
		} else {
			article.favoritesCount += 1;
			article.favorited = true;
		}

		({ article } = await (article.favorited
			? api.post(`articles/${article.slug}/favorite`, null, user && user.token)
			: api.del(`articles/${article.slug}/favorite`, user && user.token)));
	}
</script>
  <div class="item">
			<img class="ui image tiny" src={article.author.image} alt={article.author.username} />
			<div class="content">
			<a class="ui header user" href='/@{article.author.username}'> {article.author.username}
			</a>
			<span class="date">
				{new Date(article.createdAt).toDateString()}
			</span>


		{#if user}
				<button class='ui button small {article.favorited ? "primary" : ""}' on:click={toggleFavorite}>
					<i class="icon heart"></i> {article.favoritesCount}
				</button>
		{/if}

	<a href='/article/{article.slug}' rel='prefetch' class="preview-link">
		<div class="ui header green">{article.title}</div>
		<div class="ui text">{article.description}</div>
		<span>Read more...</span>
		<ul class="tag-list">
			{#each article.tagList as tag}
				<li class="tag-default tag-pill tag-outline">
					{tag}
				</li>
			{/each}
		</ul>
	</a>
</div>
  </div>
