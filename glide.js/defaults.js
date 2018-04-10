export default {
    //运动模式，是否循环
    type: 'slider',
    startAt: 0,
    //视窗宽度显示几个
    perView: 1,
    //第几个启动
    focusAt: 0,
    gap: 10,
    autoplay: false,
    hoverPause: true,
    keyboard: true,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: false,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 400,
    rewindDuration: 800,
    animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    throttle: 10,
    direction: 'ltr',
    peek: 0,
    breakpoints: {},
    classes: {
        direction: {
            ltr: 'glide--ltr',
            rtl: 'glide--rtl'
        },
        slider: 'glide--slider',
        carousel: 'glide--carousel',
        swipeable: 'glide--swipeable',
        dragging: 'glide--dragging',
        cloneSlide: 'glide__slide--clone',
        activeNav: 'glide__bullet--active',
        activeSlide: 'glide__slide--active',
        disabledArrow: 'glide__arrow--disabled'
    }







}