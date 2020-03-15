<script>
	import { goto, stores } from '@sapper/app';
	import ListErrors from '../../components/ListErrors.svelte';
	import * as api from 'api.js';

	export let article;
	export let slug;

	let inProgress = false;
	let errors;

	const { session } = stores();

	function addTag(input) {
		article.tagList = [...article.tagList, input.value];
		input.value = '';
	}

	function remove(index) {
		article.tagList = [...article.tagList.slice(0, index), ...article.tagList.slice(index + 1)];
	}

	async function publish() {
		inProgress = true;

		const response = await (slug
			? api.put(`articles/${slug}`, { article }, $session.user && $session.user.token)
			: api.post('articles', { article }, $session.user && $session.user.token));

		if (response.article) {
			goto(`/article/${response.article.slug}`);
		}

		inProgress = false;
	}

	function enter(node, callback) {
		function onkeydown(event) {
			if (event.which === 13) callback(node);
		}

		node.addEventListener('keydown', onkeydown);

		return {
			destroy() {
				node.removeEventListener('keydown', onkeydown);
			}
		};
	}
</script>

<style>
.ui.container {
	max-width: 500px;
}
</style>

	<div class="ui container">
		<div class="row">
				<ListErrors {errors}/>

				<div class="ui form">
					<div class="field">
						<div class="field">
							<input class="ui input" type="text" placeholder="Article Title" bind:value={article.title}>
						</div>

						<div class="field">
							<input class="ui input" type="text" placeholder="Gist" bind:value={article.description}>
						</div>

						<div class="field">
							<textarea class="" rows="8" placeholder="Body in markdown" bind:value={article.body}/>
						</div>

						<div class="field">
							<input class="input" type="text" placeholder="Enter tags" use:enter={addTag}>

							<div class="ui horizontal list">
								{#each article.tagList as tag, i}
									<span>
										<i class="ion-close-round" on:click='{() => remove(i)}'/>
										{tag}
									</span>
								{/each}
							</div>
						</div>

						<button class="ui button primary" type="button" disabled={inProgress} on:click={publish}>
							Publish Article
						</button>
					</div>
				</div>
		</div>
	</div>
