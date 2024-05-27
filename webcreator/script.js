const $boxes = $('.box');
$boxes.each(function(index, box) {
  const $children = $(box).children();
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > ($(box).offset().top -600 )) {
      $(box).add($children).addClass('fade-in');
    }
  });
});
// 戻ると挙動がカクカクするのでremoveClassつけないほうがいい

$(window).on('scroll', function() {
  var scrollButton = $('.scrolltop');
  if ($(this).scrollTop() > 600) {
     scrollButton.addClass('show');
  } else {
    scrollButton.removeClass('show');
  }
});


$('.scrolltop').on('click', function(e) {
  e.preventDefault();
  var targetId = $(this).attr('href');
  var targetElement = $(targetId);
  if (targetElement.length) {
    $('html, body').animate({
      scrollTop: targetElement.offset().top
    }, 1000);
  }
});


$(document).on('click', function(event) {
  var isMenuOpen = $('.menu').hasClass('menu--isOpen');
  var isClickedInsideMenu = $(event.target).closest('.menu').length > 0;
  if (!isClickedInsideMenu && isMenuOpen) {
      $('.menu').removeClass('menu--isOpen');
  }
});
$('.menu__button').on('click', function(event) {
  var isMenuOpen = $('.menu').hasClass('menu--isOpen');
  $('.menu').toggleClass('menu--isOpen');
  event.stopPropagation();
});
var followElement = document.getElementById('followElement');

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('scrollingTextContainer');
  const text = document.getElementById('scrollingText');
  let windowWidth = window.innerWidth;
  let cloneWidth = text.offsetWidth;
  let clonesCount = Math.ceil(windowWidth / cloneWidth) + 1;

  
  for (let i = 0; i < clonesCount; i++) {
    const clone = text.cloneNode(true);
    container.appendChild(clone);
  }


});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('loaded');
});

const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,
  speed:2000,
  effect:'coverflow',
  coverflowEffect: {
    slideShadows: false,
  },
  autoplay:true,
  slidesPerView: 1,

  
  pagination: {
    el: '.swiper-pagination',
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


var images = document.querySelectorAll('main img');

var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var span = document.getElementsByClassName('close')[0];

images.forEach(function(image) {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

span.onclick = function() { 
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
