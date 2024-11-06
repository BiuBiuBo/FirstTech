$(document).ready(function () {
	$('.cyber-boxes-section .counter').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
});

window.onscroll = function () {
	scrollFunction()
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("header").style.backgroundColor = "#5b1213";
	} else {
		document.getElementById("header").style.backgroundColor = "transparent";
	}
}