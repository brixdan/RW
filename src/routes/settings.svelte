<script>
    import { goto, stores } from '@sapper/app';
    import ListErrors from '../components/ListErrors.svelte';
    import SettingsForm from './_SettingsForm.svelte';
    import { post } from 'utils.js';

    let inProgress;
    let errors;

    const { session } = stores();

    async function logout() {
        await post(`auth/logout`);
        $session.user = null;
        goto('/');
    }

    async function save(event) {
        inProgress = true;

        const response = await post(`auth/save`, event.detail);

        errors = response.errors;
        if (response.user) $session.user = response.user;

        inProgress = false;
    }
</script>

<svelte:head>
    <title>Settings • Conduit</title>
</svelte:head>

<style type="text/css">
    .image {
        margin-top: -100px;
    }
    .column {
        max-width: 450px;
    }
</style>
    <div class="ui container medium one column centered">
        <div class="column">
            <div class="row">

                <h1 class="text centered">Your Settings</h1>

                <ListErrors {errors}/>

                <SettingsForm on:save={save} {...$session.user} {inProgress}/>

                <hr />

                <button class="ui button right aligned" on:click={logout}>
                    Or click here to logout.
                </button>
            </div>
        </div>
    </div>
