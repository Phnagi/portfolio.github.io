const imgBox = document.querySelector('#imgBox');
const textBox = document.querySelector('#textBox');
const lendingPage = document.querySelector('.lendingPage');
const landingPageSpeed = document.querySelectorAll(".landingPageSpeed");
console.log(lendingPage)
let lendingPageChild = lendingPage.childNodes;

  const imgSpeed = imgBox.getAttribute('data-speed');
  const textBoxSpeed = textBox.getAttribute('data-speed');


  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:lendingPage,
      start:'top top',
      scrub:true
    }
  })
  landingPageSpeed.forEach((child) => {


    const childSpeed = child.getAttribute('data-speed');
    // console.log(childSpeed)
    tl.to(child,{
      y:100*childSpeed,
      duration:2
    },0)
  });