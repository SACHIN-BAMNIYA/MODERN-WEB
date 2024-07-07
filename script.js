function locoScroll() {
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

}

locoScroll();

function CursorEffect() {
    var page1Content = document.querySelector(".page1-content");
    var cursor = document.querySelector(".cursor");

    page1Content.addEventListener("mousemove", function(sac) {
        gsap.to(".cursor", {
            x: sac.clientX,
            y: sac.clientY
        });
    });

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1
        });
    });

    page1Content.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0
        });
    });
}
CursorEffect();

function swiperEffect() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        speed: 1000,
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
}

swiperEffect();

var tl = gsap.timeline();
tl.from(".loader h3", {
    x: 40,
    opacity: 0,
    duration: 1
})
.to(".loader h3", {
    x: -15,
    duration: 0.5,
    opacity: 0
})
.to(".loader", {
    opacity: 0
})
.to(".loader", {
    display: 'none'
});
