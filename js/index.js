const swiper = new Swiper('.polices__items', {
  slidesPerView: 'auto',
  spaceBetween: 22,
  direction: 'horizontal',
  loop: true,
  resizeObserver: true,
  navigation: {
    nextEl: '.polices__button-next',
    prevEl: '.polices__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    560: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  }
});

const swiperNew = new Swiper('.reviews__items', {
  slidesPerView: 'auto',
  spaceBetween: 22,
  direction: 'horizontal',
  loop: true,
  resizeObserver: true,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    560: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  }
});

let slides = [
  'Топовый ассистанс',
  'Моментальное согласование',
  'Неограниченные консультации',
  'Все полисы с COVID – 19'
];

const swiper3 = new Swiper('.swiper-container', {
  slidesPerView: 1,
  effect: 'fade',
  speed: 500,
  loop: true,
  autoHeight: false,
  resizeObserver: true,
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (slides[index]) + '</span>';
    },
  },
});

const modalsBlock = function () {
  const modals = document.querySelectorAll('[data-modal]');

  modals.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      const body = document.body;
      modal.classList.add('open');
      body.classList.add('no-scroll');
      const exits = modal.querySelectorAll('.modal-exit');
      exits.forEach(function(exit) {
        exit.addEventListener('click', function(event) {
          event.preventDefault();
          modal.classList.remove('open');
          body.classList.remove('no-scroll');
        });
        document.onkeydown = function(e) {
          if (e.key === 'Escape') {
            modal.classList.remove('open');
          }
        };
      });
    });
  });
}

window.addEventListener("load", function() {
  modalsBlock();
  const nav = document.querySelector('.header');
  const navTop = nav.offsetTop;

  function stickyNavigation() {
    console.log('scrollY = ' + window.scrollY);

    if (window.scrollY >= 500) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  }

  window.addEventListener('scroll', stickyNavigation);
});




