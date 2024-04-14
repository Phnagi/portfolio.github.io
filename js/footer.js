const footer = document.querySelector("#footer");

let footerTl = gsap.timeline({
    scrollTrigger:{
        trigger:footer,
        start:'-60% top',
        end:'20% 20%',
        scrub:true,
        // markers:true,
    }
});


footerTl.fromTo(footer,{
    xPercent:60,
    opacity:0,
},{

    xPercent:0,
    opacity:1,
})