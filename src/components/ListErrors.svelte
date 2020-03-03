<script>
    export let errors;
</script>

{#if errors}
    <div class="ui list">
        {#each Object.keys(errors) as key}
            <div class="item">{key} {errors[key]}</div>
        {/each}
    </div>
{/if}
