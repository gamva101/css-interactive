<script>
    let wrapper;
    //currently active item
    let currentItem;

    function activate(element) {
        element.classList.add('door-opened');
        currentItem = element;
    }

    function inactivate(element) {
        element.classList.remove('door-opened');
    }

    function doorHandler(e) {
        const targetElement = e.target;
        
        if (currentItem) {
            inactivate(currentItem);
        }
        if (targetElement.classList.contains('door-body')) {
            activate(targetElement.parentNode)
        }
    }
    
</script>

<div bind:this="{wrapper}" class="stage" on:click={doorHandler}>
    <div class="door">
        <div class="door-back">
            <div class="ilbuni"></div>
        </div>1
        <div class="door-body"></div>
    </div>
    <div class="door">
        <div class="door-back">
            <div class="ilbuni"></div>
        </div>
        <div class="door-body"></div>
    </div>
    <div class="door">
        <div class="door-back">
            <div class="ilbuni"></div>
        </div>
        <div class="door-body"></div>
    </div>
</div>

<style>
    .stage {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: #333;
        /* perspective: 800px; */
    }
    .door {
        position: relative;
        width: 100px;
        height: 150px;
    }
    .door-back {
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: black;
    }
    .ilbuni {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-position: 50% 100%; /* center bottom */
        background-size: contain;
        transition: 0.5s 2.5s;
        transform: translate3d(100%, 0, 0);
    }
    .door:nth-child(1) .ilbuni { background-image: url('../images/ilbuni_0.png');}
    .door:nth-child(2) .ilbuni { background-image: url('../images/ilbuni_1.png'); }
    .door:nth-child(3) .ilbuni { background-image: url('../images/ilbuni_2.png'); }
    .door-body {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: .5s;
        transform-origin: 0%;        
    }
    .door:nth-child(1) .door-body { background: rgba(255, 0, 0, 0.7); }
    .door:nth-child(2) .door-body { background: rgba(0, 255, 0, 0.7); }
    .door:nth-child(3) .door-body { background: rgba(0, 0, 255, 0.7); }
    :global(.door-opened) .door-body {
        transition: 0.5s;
        transform: perspective(800px) rotateY(-110deg);
    }
    :global(.door-opened) .ilbuni {
        transition: 0.5s;
        transform: translate3d(0, 0, 0);
    }
</style>