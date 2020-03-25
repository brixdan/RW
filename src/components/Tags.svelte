<script>
	import { createEventDispatcher } from 'svelte';

	export let tags;
	const dispatch = createEventDispatcher();
</script>

{#if tags}
	<div class="ui horizontal list">
		{#each tags as tag}
			<div class="item">
				<div class="ui tag label">
					<a href="." class="" on:click='{() => dispatch("select", { tag })}'>
						{tag}
					</a>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div>Loading Tags...</div>
{/if}
