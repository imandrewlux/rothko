

$( document ).ready(function(){
		$('body').show(1000);
	//scales the height on hover radomly
	$('.box').each(function(){	
		
	$(this).hover(
		function(){
		let random = Math.random() * 90;
		//$(this).css("transform" ,  "rotateY("+random+"deg)" );
	}, function(){
		//$(this).css("transform" , "rotateY(0deg)" );
	});
});

var tl = anime.timeline({
  easing: 'linear',
  duration: 16000,
  loop: true,
  direction: 'alternate',
});

// Add children
tl
.add({
  targets: '.container',
  duration: 40000,
  backgroundColor: '#aaa',
}, 0)
.add({
  targets: '.box.first',
  duration: 40000,
  background: '#808080',
  height: '80%',

}, 0)
.add({
  targets: '.box.first .overlay',
  duration: 40000,
  opacity: 1,
  backgroundColor: '#ff0000',

}, 0)
.add({
  targets: '.box.second',
  duration: 40000,
  height: '150%',
  marginBottom: '-1%',
  marginTop: '-1%',
  maskImage: 'url(img/alpha-soft.png)',
  backgroundColor: '#808080',
},0)
.add({
  targets: '.box.second .overlay',
  duration: 40000,
  opacity: '1',
  backgroundColor: '#000000',
},0)
.add({
  targets: '.box.third',
  duration: 40000,
  opacity: '1',
  backgroundColor: '#808080',
  height: '80%',
},0)
.add({
  targets: '.box.third .overlay',
  duration: 40000,
  opacity: '1',
  backgroundColor: '#ffff00',
},0)

// third state
.add({
  targets: '.container',
  duration: 20000,
  backgroundColor: 'rgba(255, 20, 20, 1)',
  backgorundImage: 'url(../img/overlaybackground.png)',
}, 40000)
.add({
  targets: '.box.first',
  duration: 20000,
  backgroundColor: '#000',
  height: '80%',
},40000)
.add({
  targets: '.box.first .overlay',
  duration: 20000,
  opacity: 0,
}, 40000)
.add({
  targets: '.box.second',
  duration: 20000,
  backgroundColor: '#000',
  marginBottom: '-1%',
  marginTop: '-1%',
  height: '150%'
}, 40000)
.add({
  targets: '.box.second .overlay',
  duration: 20000,
  opacity: 0,
}, 40000)
.add({
  targets: '.box.third',
  duration: 20000,
  backgroundColor: '#000',
  height: '0%',
  opacity: 0,
}, 40000)
.add({
  targets: '.box.third .overlay',
  duration: 20000,
  opacity: 0,
}, 40000)


// retun to inital
// .add({
//   targets: '.container',
//   duration: 40000,
//   backgroundColor: '#b7431c',
//   backgorundImage: 'url(../img/friedrich.jpg);'
// }, 80000)
// .add({
//   targets: '.box.first',
//   duration: 40000,
//   background: '#fba72b',
//   height: '60%',

// }, 80000)
// .add({
//   targets: '.box.first .overlay',
//   duration: 40000,
//   opacity: '0',
//   backgroundColor: 'rgba(255,255,255,0)',

// }, 80000)
// .add({
//   targets: '.box.second',
//   duration: 40000,
//   height: '27%',
//   marginBottom: '0',
//   marginTop: '-2%',
//   backgroundColor: '#a10c29',
// }, 80000)
// .add({
//   targets: '.box.second .overlay',
//   duration: 40000,
//   opacity: '0',
//   backgroundColor: 'rgba(255,255,255,0)',
// }, 80000)
// .add({
//   targets: '.box.third',
//   duration: 40000,
//   opacity: '0',
//   backgroundColor: 'rgba(255,255,255,0)',
//   height: '0%',
// }, 80000)
// .add({
//   targets: '.box.third .overlay',
//   duration: 40000,
//   opacity: '0',
//   backgroundColor: 'rgba(255,255,255,0)',
// },80000);

tl.play();

	
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

  var $boxes = document.querySelector('.box.first');
  $boxes.style.width = e.clientX+"px";
  var $boxes = document.querySelector('.box.second');
  $boxes.style.width = e.clientX+"px";

var $boxes = document.querySelector('.box.third');
  $boxes.style.width = e.clientX+"px";

});

