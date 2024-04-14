const secWork1 = document.querySelector("#secWork1");
const secWork2 = document.querySelector("#secWork2");
const secWorkSpeed1 = document.querySelectorAll(".secWorkSpeed1");
const secWorkSpeed2 = document.querySelectorAll(".secWorkSpeed2");

    let secWorkChild1 = secWork1.childNodes;
    let secWorkChild2 = secWork2.childNodes;
    
        const sectl = gsap.timeline({
            scrollTrigger:{
                trigger:secWork1,
                start:'0% 80%',
                end:'100% 100%',
                scrub:true
            }
        });
        const sectl2 = gsap.timeline({
            scrollTrigger:{
                trigger:secWork2,
                start:'0% 80%',
                end:'100% 100%',
                scrub:true
            }
        });
        secWorkSpeed1.forEach((child) => {
            const childSpeed = child.getAttribute('data-speed');
            sectl.fromTo(child,{
                x:50*childSpeed,
                opacity:0,
                duration:1
            },{
                x:0,
                opacity:1,
                duration:1
            },0)
        });

        secWorkSpeed2.forEach((child) => {
            const childSpeed = child.getAttribute('data-speed');
            sectl2.fromTo(child,{
                x:50*childSpeed,
                opacity:0,
                duration:1
            },{
                x:0,
                opacity:1,
                duration:1
            },0)
        });