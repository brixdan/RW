<script>
    import { stores } from '@sapper/app';
    import ArticleList from './ArticleList/index.svelte';

    export let tab = 'all';
    export let tag = null;
    export let p;

    const { session } = stores();

    function yourFeed() {
        tab = "feed";
        tag = null;
    }

    function globalfeed() {
        tab = "all";
        tag = null;
    }
</script>

<div class="ui tabular menu">
    {#if $session.user}
        <a href='.' class='item {tab === "feed" ? "active" : "" }' on:click='{yourFeed}'>
            Your feed
        </a>
    {:else}
        <a href="/login" class='item'>
            Your Feed
        </a>
    {/if}

        <a href="." class='item {tab === "all" ? "active" : "" }' on:click='{globalfeed}'>
            Global Feed
        </a>
    {#if tag}
        <a href="." class='item {tab === "tag" ? "active" : "" }' on:click='{() => tab = "tag"}'>
            <i class="ui tag icon"></i> {tag}
        </a>
    {/if}

</div>
    <ArticleList {p} {tab} {tag}/>
