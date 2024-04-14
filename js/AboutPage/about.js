const homePageAbout = document.querySelector('#homePageAbout');
const homePageTittle = document.querySelector('#homePageTittle');
const homePageContent = document.querySelector('#homePageContent');
console.log(homePageTittle)
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:homePageAbout,
        start:'-60% top',
        end:'20% 20%',
        scrub:true,
        // markers:true,
    }
});
tl2.fromTo(homePageTittle,{
    xPercent:60,
    opacity:0,
},{

    xPercent:0,
    opacity:1,
})

tl2.fromTo(homePageContent,{
    xPercent:60,
    opacity:0,
},{

    xPercent:0,
    opacity:1,
})
