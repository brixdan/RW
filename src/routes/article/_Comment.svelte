<script>
	import { createEventDispatcher } from 'svelte';
	import * as api from 'api.js';

	export let comment;
	export let slug;
	export let user;

	const dispatch = createEventDispatcher();

	async function remove() {
		await api.del(`articles/${slug}/comments/${comment.id}`, user && user.token);
		dispatch("deleted");
	}
</script>

<div class="comment">
	<a href='@{comment.author.username}' class="avatar">
	<img src={comment.author.image}  alt={comment.author.username} />
	</a>

	<div class="content">
		<a class="author" href="/@{comment.author.username}">
			{comment.author.username}
		</a>
		<div class="metadata">
			<span class="date">{new Date(comment.createdAt).toDateString()}</span>
		</div>
		<div class="text">{comment.body}</div>
		{#if user && comment.author.username === user.username}
				<i class="icon trash" on:click='{remove}'></i>
				<i class="icon reply" on:click='{remove}'></i>
		{/if}
	</div>
</div>
