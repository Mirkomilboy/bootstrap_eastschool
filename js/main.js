// =============== making dropdown work on hover ===============
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// =============== active class in navigation ===============
var header = document.getElementById("active-nav");
var nav = header.getElementsByClassName("nav-item");
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// =============== Counter animation ===============
let nCount = function(selector) {
    $(selector).each(function() {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: "swing",
            step: function(value){
                $(this).text(Math.ceil(value));
            }
        });
    });
};

let a = 0;
$(window).scroll(function(){
    let Top = $('.counts').offset().top - window.innerHeight;
    if(a==0 && $(window).scrollTop() >= Top) {
        a++;
        nCount('.count-card > h1');
    }
})

// =============== owl carousel ===============
$('.testimonial .carousel .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive:{
    0:{
      items: 1
    }
  }
})

// =============== isotope for portfolio ===============
let $btn = $('#portfolio .button-group button');

$btn.click(function(e) {
  $('#portfolio .button-group button').removeClass('active');
  e.target.classList.add('active');

  let selector = $(e.target).attr('data-filter');
  $('#portfolio .grid').isotope({
    filter: selector
  });
  return false
})

// =============== accordion ===============
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-accordion");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// =============== map ===============
function initMap() {
  const andizhan = { lat: 40.801633733638525, lng: 72.32169603546232 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: andizhan,
  });
  const marker = new google.maps.Marker({
    position: andizhan,
    map: map,
  });
}

// =============== sticky navigation menu ===============
let nav_offset_top = $('.navbar').height() + 50;

function navbarFixed() {
  if($('.navbar').length) {
    $(window).scroll(function() {
      let scroll = $(window).scrollTop();
      if(scroll >= nav_offset_top) {
        $('.navbar').addClass('navbar_fixed');
      } else {
        $('.navbar').removeClass('navbar_fixed')
      }
    })
  }
}
navbarFixed();

// =============== back to bop link ===============
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// =============== scrollReveal ===============
window.sr = ScrollReveal();
  sr.reveal('.content-heading', {
    duration: 1000,
    scale: 0.1
  });
  sr.reveal('.navbar-brand', {
    duration: 2000,
    distance: '30px'
  });
  sr.reveal('.scale', {
    duration: 2000,
    scale: 0.1
  });
  sr.reveal('.scale-down', {
    duration: 2000,
    scale: 1.6
  });
  sr.reveal('.top', {
      duration: 2000,
      distance: '300px',
      origin: 'top'
  });
  sr.reveal('.bottom', {
      duration: 2000,
      distance: '300px'
  });
  sr.reveal('.left', {
    duration: 2000,
    distance: '300px',
    origin: 'left'
  });