<h1>Animation</h1>
<div class="box">Box</div>

<style>
    @keyframes sample-ani {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(100px, 0);
            background: red;
        }
        100% {
            transform: translate(200px, 100px);
        }
    }
    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        background: #fff000;
        border: 2px solid #000;
        animation: sample-ani 2s linear infinite forwards;
    }
    .box:hover {
        animation-play-state: paused;
    }
</style>