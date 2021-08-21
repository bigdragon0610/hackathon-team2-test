const swiper01 = new Swiper('#swiper01', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',  //ページネーションの要素のセレクタ
        type: 'bullets',  //ページネーションのタイプ
        clickable: 'true',
    },
});

//要素取得
const container = document.querySelector('#swiper01');
const nextButton = document.querySelector('#swiper01 .swiper-button-next');
const prevButton = document.querySelector('#swiper01 .swiper-button-prev');
//マウスオーバーイベント
container.addEventListener('mouseenter', () => {
    nextButton.classList.add('hover');
    prevButton.classList.add('hover');
});
//マウスアウトイベント
container.addEventListener('mouseleave', () => {
    nextButton.classList.remove('hover');
    prevButton.classList.remove('hover');
});

// let visibleTopicSlides;
// function switchByWidth() {
//     if (window.matchMedia('(max-width: 1023px)').matches) {
//         //スマホ処理
//         visibleTopicSlides = 1;
//     } else if (window.matchMedia('(max-width:1279px)').matches) {
//         //タブレット処理
//         visibleTopicSlides = 2;
//     } else if (window.matchMedia('(min-width:1280px)').matches) {
//         //PC処理
//         visibleTopicSlides = 3;
//     }
// }
// window.onload = switchByWidth;
// window.onresize = switchByWidth;

const swiper02 = new Swiper('#swiper02', {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
});