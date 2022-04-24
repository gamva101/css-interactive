<script>
    import { onMount } from 'svelte';
    let scrollY = 'output';
    let ilbuni;
    let ball;
    window.addEventListener('scroll', function() {
        // scrollY = window.pageYOffset;
        const posY = ilbuni.getBoundingClientRect().top;
        scroll = posY;
        console.log(posY, window.innerHeight *.2)
        if (posY < window.innerHeight * 0.2) {
            ilbuni.classList.add('zoom');
        } else {
            ilbuni.classList.remove('zoom');
        }
    })
    window.addEventListener('click', (e) => {
        ball.style.transform = 'translate(' + (e.clientX - 15) + 'px, ' + (e.clientY - 15) + 'px)';
    });

    onMount(() => {
        console.log('onMount');
        ball.addEventListener('transitionend', () => {
            ball.classList.add('end');
        });

        ball.addEventListener('animationend', () => {
            ball.classList.add('end');
        })

        ball.addEventListener('click', () => {
            ball.style.animation = 'ball-ani 1s 3 alternative forwards'
        })
    })
    
</script>


<div class="output">{scrollY}</div>
<div class="content">
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus incidunt quod quidem nulla explicabo quam ea corporis nihil consequatur vel. Aspernatur at ad illo distinctio quia. Laborum saepe aliquam vero.
    </p>
    <div class="ball" bind:this={ball}></div>
    <figure class="ilbuni" bind:this={ilbuni}>
        <img src="images/ilbuni_0.png" alt="일분이">
    </figure>
</div>


<style>
    @keyframes ball-ani {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(200px, 200px);
        }
    }
    .content {
        height: 1000vh;
        padding: 20%;
        background: yellowgreen;
    }
    .output {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        font-size: 2rem;
        font-weight: 200;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
    }
    .ilbuni {
        width: 100px;
        margin: 20px auto;
        transition: 1s;
    }
    .ball {
        position: absolute;
        left:0;
        top:0;
        /* margin: -15px 0 0 -15px; */
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: red;
        transition: 1s;
        /* animation: ball-ani 1s 3 alternate forwards; */
    }
    :global(.ball.end) {
        /* background:  dodgerblue; */
        border: 5px solid dodgerblue;
    }
    :global(.zoom) {
        transform: scale(2);
    }
</style>