const slider = new Swiper('.swiper', {
    spaceBetween: 8,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    },
    pagination: {
        el: '.slider-mobile__pagination'
    }
});

const pagination = document.querySelector('.js-swiper-pagination');
const currentSlide = () => {
    if(pagination) pagination.innerHTML = '0' + (slider.realIndex + 1);
}

slider.on('slideChange', currentSlide)