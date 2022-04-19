<script>
    import { onMount } from 'svelte';
    let root;
    let stage
    function clickHandler(e) {
        if (e.target.classList.contains('ilbuni')) {
            stage.removeChild(e.target);
        }
    }
    onMount(() => {
        stage = root.querySelector('.stage');
        stage.addEventListener('click', clickHandler);

        console.log('onMount', stage);
    })
</script>

<div bind:this={root}>
    <div class="stage">
        <div class="ilbuni" ></div>
        <div class="ilbuni" ></div>
        <div class="ilbuni" ></div>
    </div>
    
</div>

<style>
    .stage {
        overflow: hidden;
        position: relative;
        width: 100vw;
        height: 75vw;
        background: #fff000;
    }

    @keyframes moving {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(90vw);
        }
    }
    .ilbuni {
        position: absolute;
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain; /* full of box */   
        animation: moving  infinite alternate;
    }

    .ilbuni:nth-of-type(1) {
        left: 5%;
        bottom: 5%;
        background-image: url('../images/ilbuni_0.png');
        animation-duration: 2s;
    }
    .ilbuni:nth-of-type(2) {
        left: 15%;
        bottom: 5%;
        background-image: url('../images/ilbuni_1.png');
        animation-duration: 3s;
    }
    .ilbuni:nth-of-type(3) {
        left: 7%;
        bottom: 10%;
        background-image: url('../images/ilbuni_2.png');
        animation-duration: 4s;
    }
</style>