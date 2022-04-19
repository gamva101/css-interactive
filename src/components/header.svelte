<script>
    import { link } from 'svelte-spa-router';
</script>

<header>
    <a use:link href='/'>Home</a>
    <a use:link href='/transition'>Transition</a>
    <a use:link href='/animation'>Animation</a>
    <a use:link href='/css-3d'>CSS 3D</a>
    <a use:link href='/flex'>Flex</a>
    <a use:link href='/event'>Event</a>
    <a use:link href='/about'>About</a>
</header>

<style>
    header {
        width: 80vw;
        height: 30px;
        align-items: center;
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
    }
</style>