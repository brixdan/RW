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
    .column {
        max-width: 450px;
    }
</style>
    <div class="ui container medium one column">
        <div class="ui center aligned row">
            <div class="row">

                <h1 class="ui text centered">Your Settings</h1>

                <ListErrors {errors}/>

                <SettingsForm on:save={save} {...$session.user} {inProgress}/>

                <hr />

            </div>
        </div>
            <div class="right attached row">

                <div class="ui negative basic button right aligned" on:click={logout}>
                    Or click here to logout.
                </div>
            </div>
        <br />
    </div>
