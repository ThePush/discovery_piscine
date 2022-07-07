function change_bg_color() {
	const bgEl = document.querySelector("body");
	let color = "#";
	color += Math.random().toString(16).slice(2, 8).toUpperCase();
	bgEl.style.backgroundColor = color;
}