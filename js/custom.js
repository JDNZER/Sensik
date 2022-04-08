let config1 = {
    type: 'carousel',
    autoplay:3000,
    perView: 1,
    animationDuration: 600,
    animationTimingFunc: 'linear',
    breakpoints: {
        767: {
            perView: 1
        },
        992: {
            perView: 1
        }
    }
};

new Glide('._testimonial_slider', config1).mount();
