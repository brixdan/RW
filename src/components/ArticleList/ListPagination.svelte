<script>
	export let articlesCount;
	export let page = 0;

	let range;

	$: {
		range = [];
		for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
			range.push(i);
		}
	}
</script>

<div>

{#if articlesCount > 10}
	<div class="ui horizontal list">
			{#each range as v}
				<div class='item'>
					<div class="content">
         					<a class='ui label {v + 1 === page ? "active": ""}' href="/{v ? v + 1 : ''}">{v + 1}</a>
					</div>
				</div>
			{/each}
	</div>
{/if}
</div>
