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
<div class="ui red card compact">
  <div class="ui padded content">
	 <div class="ui one column grid">
		 <div class="column">
			<img class="ui top aligned mini circular image" src={article.author.image} alt={article.author.username} />

				<a class="ui top aligned header user green" href='/profile/@{article.author.username}'> {article.author.username}
				</a>

			 <div class="date mini">
				 {new Date(article.createdAt).toDateString()}
			 </div>
		 </div>
	 </div>

		{#if user}
				<button class='ui right floated button small {article.favorited ? "primary" : ""}' on:click={toggleFavorite}>
					<i class="icon heart"></i> {article.favoritesCount}
				</button>
		{/if}


		<div class="ui header green">{article.title}</div>
		<div class="ui small text">{article.description}</div>
		<a href='/article/{article.slug}' rel='prefetch'>
		<span>Read more...</span>
	    </a>
	<div class="ui right floated horizontal list">
	{#each article.tagList as tag}
	   <div class="item">
		   <div class="ui tag label">
			{tag}
		   </div>
		</div>
	{/each}
	</div>
</div>
</div>
