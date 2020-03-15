<script>
	import { createEventDispatcher } from 'svelte';
	import * as api from 'api.js';

	export let slug;
	export let user;

	const dispatch = createEventDispatcher();

	let body = '';

	async function submit(event) {
		const response = await api.post(`articles/${slug}/comments`, { comment: { body } }, user && user.token);

		if (response.comment) {
			dispatch('commented', response);
			body = '';
		}
	}
</script>

<form class="ui form" on:submit|preventDefault='{submit}'>
	<div class="field">
		<textarea placeholder="Write a comment..." bind:value={body} rows="2" ></textarea>
	</div>
	<button type="submit" class="ui green middle aligned labeled submit icon button">
		<i class="icon edit"></i> Post Comment
	</button>
</form>
