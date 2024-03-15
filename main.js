


gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

gsap.registerPlugin(ScrollTrigger);

gsap.to('.blur-section2 h2'), {
  x:-100,
  ScrollTrigger:{
    trigger: '.blur-section2 h2',
    start: 'top center',
    end: 100,
    pin: true,
  }
}