var css = '@keyframes marqueeAnimation  {100% {transform: translateX(-'+(document.querySelectorAll('.reference-img')[0].clientWidth+40)+'px)}}',
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

var headerContent = document.querySelectorAll('header .text-wrapper')[0];
var video = document.querySelectorAll('video')[0];
video.play();
var interval = setInterval(function(){
  if(video.readyState === 4) {
    document.body.classList.remove('loading')
    clearInterval(interval);
  }
}, 100)

window.addEventListener('scroll', checkOffset);
window.addEventListener('load', checkOffset);
window.addEventListener('scroll', changeHue);
window.addEventListener('load', changeHue);

function checkOffset(){
  var scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  if(!headerContent.classList.contains('is-hidden') && scrollTop > 100){
    headerContent.classList.add('is-hidden')
  }
  if(scrollTop < 100) headerContent.classList.remove('is-hidden')
}

function changeHue(e){
  if(window.innerWidth < 850){
    var scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    var height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    video.style.filter = 'hue-rotate(-'+((scrollTop/height)*71)+'deg)'
  }
}




var scrollers = document.querySelectorAll('[data-scrollto]');

for(var i = 0; i < scrollers.length; i++){
  scrollers[i].addEventListener('click', function(e){
    var element = e.target.dataset.scrollto != undefined ? e.target.dataset.scrollto : e.target.parentElement.dataset.scrollto
    var top = element != 'top' ? document.querySelectorAll(element)[0].getBoundingClientRect().top + window.scrollY - 100 : 0;

    if(element != 'top' && document.querySelectorAll(element)[0].dataset.offset == 'half'){
      top -= window.innerHeight/4;
    }
    window.scroll({top: top, left: 0, behavior: 'smooth' });
  })
}
