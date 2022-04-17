<h1>CSS Transform</h1>
<p>
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptas neque quae? Maxime quasi eveniet earum suscipit similique beatae error, harum deleniti omnis fugit nobis placeat, nesciunt soluta inventore voluptatem?
</p>
<div class="box-container">
	<div class="box">A</div>
	<div class="box">B</div>
	<div class="box">C</div>
	<div class="box">D</div>
	<div class="box">E</div>
</div>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus totam magnam! Deleniti perspiciatis quam, pariatur ea omnis dolores mollitia praesentium quaerat beatae fugit. Quis unde laborum corrupti sequi pariatur.
</p>

<style>
	.box-container {
		display: flex;
	}
	.box {
		width: 100px;
		height: 100px;
		border: 2px solid;
		background: rgba(255,255,0,0.7);
		transition: 0.5s;
	}
	.box:hover {
			/* transform: scale(2) rotate(15deg); */
		/* transform: skewY(30deg); */
		/* transform: translate(30px, 10px); */
		/* transform: scale(2) translateZ(30px); */
		/* transform-origin: 50% 50% */
		/* transform: rotate(30deg); */
		width: 200px;
		background: red;
	}
</style>