<script>
	export let articlesCount;
	export let page = 0;

	let range;

	$: {
		console.log('range', range, 'page = ', page)
		range = [];
		for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
			range.push(i);
		}
	}
</script>

<div>
	page={page}
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

<!--<div class="ui pagination menu">-->
<!--	<a class="item">1</a>-->
<!--	<a class="active item">2</a>-->
<!--	<a class="disabled item">...</a>-->
<!--	<a class="item">{range.length}</a>-->
<!--</div>-->
