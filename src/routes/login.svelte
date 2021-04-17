<script>
    import { goto, stores } from '@sapper/app';
    import ListErrors from '../components/ListErrors.svelte';
    import { post } from 'utils.js';

    const { session } = stores();

    let email = '';
    let password = '';
    let errors = null;

    async function submit(event) {
        const response = await post(`/auth/login`, { email, password });

        // TODO handle network errors
        errors = {};
        if (response.errors) errors = response.errors;
        if (errors||true) errors["my"] = "Another my error."

        if (response.user) {
            $session.user = response.user;
            goto('/');
        }
    }
    jQuery(document)
            .ready(function() {
                jQuery('.ui.form')
                        .form({
                            fields: {
                                email: {
                                    identifier  : 'email',
                                    rules: [
                                        {
                                            type   : 'empty',
                                            prompt : 'Please enter your e-mail'
                                        },
                                        {
                                            type   : 'email',
                                            prompt : 'Please enter a valid e-mail'
                                        }
                                    ]
                                },
                                password: {
                                    identifier  : 'password',
                                    rules: [
                                        {
                                            type   : 'empty',
                                            prompt : 'Please enter your password'
                                        },
                                        {
                                            type   : 'length[6]',
                                            prompt : 'Your password must be at least 6 characters'
                                        }
                                    ]
                                }
                            }
                        })
                ;
            })
    ;

</script>

<svelte:head>
    <title>Sign in • Conduit</title>
</svelte:head>

<style type="text/css">
    .image {
        margin-top: -100px;
    }
    .column {
        max-width: 450px;
    }
</style>

<div class="ui middle aligned center aligned grid">
    <div class="column">
        <h2 class="ui teal image header">
            <img src="logo.png" class="image" alt="logo">
            <div class="content">
                Log-in to your account
            </div>
        </h2>

        <ListErrors {errors}/>

        <form on:submit|preventDefault={submit} class="ui large form">
            <div class="ui stacked segment">
                <div class="field">
                    <div class="ui left icon input">
                        <i class="ui mail icon"></i>
                        <input type="text" name="email" placeholder="E-mail address" bind:value={email}>
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="lock icon"></i>
                        <input type="password" name="password" placeholder="Password" bind:value={password}>
                    </div>
                </div>
                <button class="ui fluid large teal submit button" type="submit" disabled='{!email || !password}'>Log In</button>
            </div>

            <div class="ui error message"></div>

        </form>

        <div class="ui message">
            New to us? <a href="register">Sign Up</a>
        </div>
    </div>
</div>


