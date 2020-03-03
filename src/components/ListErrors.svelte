<script>
    export let errors;
</script>

{#if errors}
    <div class="ui error message">
        {#each Object.keys(errors) as key}
            <div class="item">{key} {errors[key]}</div>
        {/each}
    </div>
{/if}
