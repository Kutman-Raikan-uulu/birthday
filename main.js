var age = 13;
function confetto() {
	for(var i = 0; i < age * 2; i++) {
		var a = document.createElement("div");
		document.body.appendChild(a);
		a.outerHTML = '<div class = "confetti i' + Math.floor(Math.random() * 4) + '" style = "left: ' + Math.floor(Math.random() * document.body.clientWidth) + 'px;"></div>';
	}
}
setInterval(function() {
	confetto();
}, 640);