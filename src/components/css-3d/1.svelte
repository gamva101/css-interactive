<div class="world">
    <div class="card">
        <div class="card-side card-side-front">F</div>
        <div class="card-side card-side-back">B</div>
    </div>
</div>

<style>
    .world {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80vw; /* 60% viewport width */
        height: 80vh;
        background: #fff000;
        perspective: 500px;
    }

    .card {
       position: relative;
        width: 100px;
        height: 150px;
        margin: 1em;
        transition: 1s;
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        /* transform-origin: left; */
    }

    .card-side {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5em; /* em related font size of element */
        font-size: 1.5rem;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* safari works*/
        -moz-backface-visibility: hidden;
        backface-visibility: hidden; /* standard browser works*/
    }

    .card-side-front {
        z-index: 1;
        background: white;
    }

    .card-side-back {
        background: red;
        transform: rotateY(180deg);
    }

    .world:hover .card {
        transform: rotateY(-180deg);
    }
</style>