

// Rendering NavItems

// Section 1 Animation
gsap.from(".middiv",{
  opacity:0,
  duration: 0.5,
   
})
gsap.from("#img1",{
  delay: 1,
  opacity:0,
  duration: 1,
  y:100
  
  
})
gsap.from("#img2",{
  delay: 1,
  opacity:0,
  duration: 1,
  x:100
  
})

gsap.from("#img3",{
  delay: 1,
  opacity:0,
  duration: 1,
  y:-100
  
})


//Section 2 Animation

gsap.from("#section-2 h2, #section-2 h1, #section-2 #about-us",{
  opacity: 0,
  translateY: "50px",
  stagger: 0.3,
 
  scrollTrigger:{
    trigger: "#section-2 h2",
    scroller: "body",
    start: "top 80%",
    
  }
})



const navbar = document.querySelector('.nav')
const pageThreeHeading = document.getElementById('section-3-heading')
const pageThreePara = document.getElementById('section-3-paragraph')
const pageThreeLearnMore = document.getElementById('learn-more')
const pageFourHeading = document.getElementById('section-4-heading')
const pageFourBrandLogos = document.getElementById('brand-logos')
const sectionFiveAllCards = document.getElementById("section5-cards")
const sectionFiveSeeMore = document.getElementById("section5-seemore")
const sectionSixSlides = document.querySelector('.swiper')
const sectionSevenCard = document.querySelector('.contact-details')
const footerLetsTalk = document.querySelector('.footer-letstalk')
const footerLearn = document.querySelector('.footer-learn')
const footerExplore = document.querySelector('.footer-explore')
const footerFindus = document.querySelector('.footer-findus')
const footerPartners = document.querySelector('.footer-partners')
const footerPartnersHorizontal = document.querySelector('.footer-partners-horizontal')
let prevScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
  const currScrollPosition = window.scrollY;
  // console.log(currScrollPosition);
  
  //Navbar Animation
  if (currScrollPosition < 300) {
    navbar.style.top = '0';
  }
  else if (prevScrollPosition > currScrollPosition){
    navbar.style.top = '0';

  }
  else{
    navbar.style.top = `-${navbar.clientHeight}px`;
  }

  // Section 3 Animations
  if (currScrollPosition >= 800){
  
    pageThreeHeading.style.opacity = '100';
    pageThreeHeading.style.transform = 'translateY(0px)';
  }
  if (currScrollPosition >1000){
    pageThreePara.style.opacity = '100';
    pageThreePara.style.transform = 'translateY(0px)';
  }
  if (currScrollPosition >=1400){
    pageThreeLearnMore.style.opacity = '100';
    pageThreeLearnMore.style.transform = 'translateY(0px)';
  }

  //Section 4 Animations

  if (currScrollPosition > 1900){
    pageFourHeading.style.opacity = '100';
    pageFourHeading.style.transform = 'translateY(0px)';
  }
  if(currScrollPosition >2200){
    pageFourBrandLogos.style.opacity = '100';
  }
 

  //Section 5 Animations
  if (currScrollPosition > 2700){
    sectionFiveAllCards.style.opacity = '100';
    sectionFiveAllCards.style.transform = 'translateY(0px)';
  }
  if(currScrollPosition >3200){
    sectionFiveSeeMore.style.opacity = '100';
  }
  prevScrollPosition = currScrollPosition;

  //Section 6 Animations
  if(currScrollPosition >3500){
    sectionSixSlides.style.opacity = '100';
    sectionSixSlides.style.transform = 'translateY(0px)';
  }


  //Section 7 Animations

  if(currScrollPosition > 4200){
    sectionSevenCard.style.transform = 'translateY(-50%)'
  }
  if (currScrollPosition >4600){
      animateFooterNav(elements);
  }
  prevScrollPosition = currScrollPosition;
});

//Footer Nav Animations
const elements = [footerLetsTalk, footerLearn, footerExplore, footerFindus, footerPartners, footerPartnersHorizontal]
function animateFooterNav(elements) {
  for (let index = 0; index < elements.length; index++) {
    // Use an IIFE (Immediately Invoked Function Expression) to capture the current index.
    (function (currentIndex) {
      setInterval(function () {
        // console.log(elements[currentIndex]);
        elements[currentIndex].style.transform = 'translateY(0)';
        elements[currentIndex].style.opacity = '1';
      }, 300 * currentIndex); // Delay each animation by 'currentIndex' seconds.
    })(index);
  }
}

//Cards Effects
const sectionFiveCards = document.querySelectorAll(".section5-individual-card");
sectionFiveCards.forEach((card)=>{
  let backgroundImage = card.querySelector(".background-image");
  let buttonOverlay = card.querySelector(".card-btn-overlay");
  card.addEventListener('mouseenter', ()=>{
    buttonOverlay.style.width = '100%';
    backgroundImage.style.transform='scale(1.05)';
  })
  card.addEventListener('mouseleave', ()=>{
    buttonOverlay.style.width = '0%';
    backgroundImage.style.transform='scale(1)';
  })
})


//Page one and two animations

//Carousel with SwipperJS

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  initialSlide: 2,
  breakpoints: {
    900: {
       // Number of slides per view at this breakpoint
      slidesPerView: 1.7,
    }
  },
  
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});