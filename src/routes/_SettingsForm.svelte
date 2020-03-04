<script>
    import { createEventDispatcher } from 'svelte';

    export let inProgress, image, username, bio, email, password = '';
    const dispatch = createEventDispatcher();

    function submit(event) {
        dispatch('save', { image, username, bio, email, password });
    }
</script>

<form on:submit|preventDefault='{submit}' class="ui large form">
    <div class="ui clearing segment">

        <div class="field">
            <input name="image" type="text" placeholder="URL of profile picture" bind:value={image}>
        </div>

        <div class="field">
            <input name="username" type="text" placeholder="Username" bind:value={username}>
        </div>

        <div class="field">
            <textarea name="bio" class="form large" rows="8" placeholder="Short bio about you" bind:value={bio}/>
        </div>

        <div class="field">
            <input name="email" type="email" placeholder="Email" bind:value={email}>
        </div>

        <div class="field">
            <input name="password" type="password" placeholder="New Password" bind:value={password}>
        </div>

        <button class="ui right floated primary button" type="submit" disabled={inProgress}>
            Update Settings
        </button>

    </div>


</form>
