<script>
    import { onMount } from 'svelte';
    import MainView from './MainView.svelte';
    import Tags from './Tags.svelte';
    import * as api from 'api.js';

    export let p = 1;

    let tab;
    let tag;
    let tags;

    function setTags({ detail }) {
        tag = detail.tag;
        tab = "tag";
    }

    onMount(async () => {
        ({ tags } = await api.get('tags'));
    });
</script>

<svelte:head>
    <title>Conduit</title>
</svelte:head>

<div class="ui two column grid">
        <div class="column">
            <MainView {p} {tag} bind:tab />
        </div>
        <div class="column">
            <p>Popular Tags</p>
            <Tags {tags} on:select='{setTags}' />
        </div>
</div>


