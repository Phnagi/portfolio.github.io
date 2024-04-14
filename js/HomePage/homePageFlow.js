const flow = document.querySelector(".flow");
const flowImgBox = document.querySelectorAll(".flowImgBox");

let flowChild = flow.childNodes;
const flowTl = gsap.timeline({
    scrollTrigger:{
        trigger:flow,
        start:'-20% top',
        end:'100% 100%',
        scrub:true
    }
})
flowImgBox.forEach((child) => {

    const childSpeed = child.getAttribute('data-speed');
    flowTl.from(child,{
        y:50*childSpeed,
   
        duration:1
    },0)
});