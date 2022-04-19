<div class="container">
    <div class="item">AAA</div>
    <div class="item">B</div>
    <div class="item">CCCCC</div>
    <div class="item">DDD</div>
    <div class="item">E</div>
</div>

<style>
    .container {
        display: flex;
        /* flex-direction: column; */
        /* justify-content: space-around;  */
        height: 80vh;
        background: gray;
    }

    .item {
        flex-grow: 1;
        /* padding: 2em; */
        border: 3px solid black;
        background: white;
        font-size: 2em;
        /* flex-basis: 0; */
        flex: 1;
    }
    /* .item:nth-child(1) { flex-grow: 1;}
    .item:nth-child(2) { flex-grow: 2;}
    .item:nth-child(3) { flex-grow: 3;}
    .item:nth-child(4) { flex-grow: 4;}
    .item:nth-child(5) { flex-grow: 5;} */
</style>