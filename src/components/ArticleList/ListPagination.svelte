<script>
	export let articlesCount;
	export let page;

	let range;

	$: {
		console.log('articlesCount', articlesCount)
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
				<li class='item {v === page ? "red": "black"}'>
					<a class="" href="./p={v ? v + 1 : ''}">{v + 1}</a>
				</li>
			{/each}
	</div>
{/if}
</div>


<div aria-label="Pagination Navigation" role="navigation"
	 class="ui pagination pointing secondary menu">

	<a
			aria-current="false"
			aria-disabled="false"
			tabindex="0"
			value="1"
			aria-label="Previous item"
			type="prevItem"
			class="item"
			href="/1"
	>
		⟨
	</a>
	<a
			aria-current="true"
			aria-disabled="false"
			tabindex="0"
			value="1"
			type="pageItem"
			class="active item"
			href="/1"
	>
		1
	</a>
	<a aria-current="false" aria-disabled="false" href="/1" tabindex="0" value="2" type="pageItem" class="item">
		2
	</a>
	<a aria-current="false" aria-disabled="false" href="/1" tabindex="0" value="3" type="pageItem" class="item">
		3
	</a>
	<a
			aria-current="false"
			aria-disabled="false"
			tabindex="0"
			value="2"
			aria-label="Next item"
			type="nextItem"
			class="item"
			href="/1"
	>
		⟩
	</a>
</div>
