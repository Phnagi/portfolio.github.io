const HomePageSkill = document.querySelector(".HomePageSkill");
const HomePageSkillTitle = document.querySelector(".HomePageSkillTitle");
const skillBox = document.querySelector(".skillBox");
const EducationBox = document.querySelector(".EducationBox");


let skillTl = gsap.timeline({
    scrollTrigger:{
        trigger:HomePageSkill,
        start:'-60% top',
        end:'20% 20%',
        scrub:true,


        // markers:true,
    }
});

skillTl.fromTo(HomePageSkillTitle,{
    xPercent:10,
    opacity:0,

},{

    xPercent:0,
    opacity:1,
    duration:15,
    ease: "power1.out"
})

skillTl.fromTo(skillBox,{
    xPercent:10,
    opacity:0,
},{

    xPercent:0,
    opacity:1,
    duration:15,
    ease: "power1.out"
})

skillTl.fromTo(EducationBox,{
    xPercent:10,
    opacity:0,
},{

    xPercent:0,
    opacity:1,
    duration:15,
    ease: "power1.out"
})