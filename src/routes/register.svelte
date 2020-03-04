<script>
    import { goto, stores } from '@sapper/app';
    import ListErrors from '../components/ListErrors.svelte';
    import { post } from 'utils.js';

    const { session } = stores();

    let username = '';
    let email = '';
    let password = '';
    let errors = null;

    async function submit(event) {
        const response = await post(`auth/register`, { username, email, password });

        // TODO handle network errors
        errors = response.errors;

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
                                username: {
                                    identifier  : 'username',
                                    rules: [
                                        {
                                            type   : 'empty',
                                            prompt : 'Please enter your username'
                                        },
                                        {
                                            type   : 'length[3]',
                                            prompt : 'Please enter a valid username'
                                        }
                                    ]
                                },
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
    <title>Sign up • Conduit</title>
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
                Sign up
            </div>
        </h2>

        <div class="ui message">
            Have an account? <a href="/login">Sign In</a>
        </div>

        <ListErrors {errors}/>

        <form on:submit|preventDefault={submit} class="ui large form">
            <div class="ui stacked segment">
                <div class="field">
                    <div class="ui left icon input">
                        <i class="ui user icon"></i>
                        <input type="text" name="username" placeholder="Your Name" bind:value={username}>
                    </div>
                </div>
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
                <button class="ui fluid large teal submit button" type="submit" disabled='{!email || !password}'>Sign Up</button>
            </div>

            <div class="ui error message"></div>

        </form>

    </div>
</div>


