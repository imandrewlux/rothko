

$( document ).ready(function(){
		$('body').show(1000);
	//scales the height on hover radomly
	$('.box').each(function(){	
		const boxHeight = $(this).height();
		const boxWidth = $(this).width();
	$(this).hover(
		function(){
		let random = Math.random() * 500;
		$(this).css("height" , boxHeight + random );
	}, function(){
		$(this).css("height" , boxHeight );
	});
});

	
});

document.addEventListener('mousemove', e => {
  const { clientX: x, clientY: y } = e;
  const {
    innnerWidth: width,
    innerHeight: height
  } = window;
  const $overlay = document.querySelector('.mouse-overlay');
  $overlay.style.left = `calc(${x}px - 100vw)`;
  $overlay.style.top = `calc(${y}px - 100vh)`;
});

