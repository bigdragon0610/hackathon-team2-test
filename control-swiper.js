const swiper = new Swiper('.swiper-container', {
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