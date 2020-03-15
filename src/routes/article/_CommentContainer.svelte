<script>
	import ListErrors from '../../components/ListErrors.svelte';
	import CommentInput from './_CommentInput.svelte';
	import Comment from './_Comment.svelte';

	export let comments;
	export let errors;
	export let slug;
	export let user;
</script>

<div class="ui comments">
	{#if user}
		<div>
			<ListErrors {errors}/>
			<CommentInput {slug} {user} on:commented='{({ detail }) => comments = [detail.comment, ...comments] }'/>
		</div>
	{:else}
		<p>
			<a href="/login">Sign in</a> or <a href="/register">sign up</a> to add comments on this article.
		</p>
	{/if}

	{#each comments as comment, i (comment.id)}
		<Comment {comment} {slug} {user} on:deleted='{() => comments = comments.filter((_, index) => i !== index)}'/>
	{/each}
</div>
