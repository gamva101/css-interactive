<script>
    import { link } from 'svelte-spa-router';
</script>

<header>
    <a use:link href='/'>Home</a>
    <a use:link href='/transition'>Transition</a>
    <a use:link href='/animation'>Animation</a>
    <a use:link href='/about'>About</a>
</header>