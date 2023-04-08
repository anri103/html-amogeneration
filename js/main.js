window.onscroll = function () {
    const windowScroll = window.scrollY;
    const fixedMenu = document.querySelector('.header-fixed');
    if (windowScroll > 500) {
        fixedMenu.classList.add('show');
    }
    else {
        fixedMenu.classList.remove('show');
    }
}

// [ Back to Top Button ]
const scrollBtn = document.querySelector('.btn-scroll-top');
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
};
document.addEventListener('scroll', () => {
    btnVisibility();
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// [ Enable Fancybox ]
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// [ Enable AOS ]
AOS.init({
    once: true,
    disable: 'phone',
});

// [ Слайдер с отзывами ]
const testimonialSwiper = new Swiper('.testimonialSwiper', {
    loop: true,
    spaceBetween: 24,
    autoplay: {
        delay: 3500,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});