// smooth scrolling (jika browser tidak support smooth scrolling css) dan memperbaiki posisi navbar yang kurang tepat saat scrolling.

const container = document.querySelector('.container');
const links = document.querySelectorAll('.page-scroll');
const menuBtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.nav ul');


for (const link of links) {
  link.addEventListener('click', eventHandler);
}

function eventHandler(el) {
  container.classList.remove('menuShowed');
  const href = this.getAttribute('href');
  const elTujuan = document.querySelector(href).offsetTop;

  scroll({
    top: elTujuan - 48,
    behavior: "smooth"
  });

  menuBtn.classList.remove('show');
  menu.classList.remove('show2');

  el.preventDefault();
}

// navbar pada ukuran handphone

menuBtn.addEventListener('click', () => {
  container.classList.toggle('menuShowed');
  menuBtn.classList.toggle('show');
  menu.classList.toggle('show2');
})

//  tombol scrollTop

const scrollTopEl = document.querySelector('.scrollTop');

scrollTopEl.addEventListener('click', () => {
  scroll({
    top: 0,
    behavior: "smooth"
  })
})

// slider pada ukuran handphone

const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');


next.addEventListener('click', () => {
  const slide = document.querySelector('.slider .slide');
  let width = slide.clientWidth;

  slider.scrollLeft += width;
})

prev.addEventListener('click', () => {
  const slide = document.querySelector('.slider .slide');
  let width = slide.clientWidth;

  slider.scrollLeft -= width;
})

/* efek fade pada about di mode dekstop */

const slideSatu = document.querySelector('.slider .slide.satu');
const slideDua = document.querySelector('.slider .slide.dua');
const slideTiga = document.querySelector('.slider .slide.tiga');

window.addEventListener('scroll', () => {
  const windowTop = window.scrollY;

  if (windowTop > 450) {
    setTimeout(function() {
      slideSatu.classList.add('slide-show');
    }, 200);
  }
  if (windowTop > 700) {
    setTimeout(function() {
      slideDua.classList.add('slide-show');
    }, 200);
  }
  if (windowTop > 1000) {
    setTimeout(function() {
      slideTiga.classList.add('slide-show');
    }, 200);
  }

  if (windowTop < 350) {
    setTimeout(function() {
      slideSatu.classList.remove('slide-show');
      slideDua.classList.remove('slide-show');
      slideTiga.classList.remove('slide-show');
    }, 100);
  }
})