const navbar = document.getElementById('nav');
const pageThreeHeading = document.getElementById('section-3-heading');
const pageThreePara = document.getElementById('section-3-paragraph');
const pageThreeLearnMore = document.getElementById('learn-more');
const pageFourHeading = document.getElementById('section-4-heading');
const pageFourBrandLogos = document.getElementById('brand-logos');
const sectionFiveAllCards = document.getElementById("section5-cards");
const sectionFiveSeeMore = document.getElementById("section5-seemore");
const sectionSixSlides = document.querySelector('.swiper');
const sectionSevenCard = document.querySelector('.contact-details')
console.log(sectionSevenCard);
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
  if (currScrollPosition >=950){
    pageThreePara.style.opacity = '100';
    pageThreePara.style.transform = 'translateY(0px)';
  }
  if (currScrollPosition >=1300){
    pageThreeLearnMore.style.opacity = '100';
    pageThreeLearnMore.style.transform = 'translateY(0px)';
  }

  //Section 4 Animations

  if (currScrollPosition > 1600){
    pageFourHeading.style.opacity = '100';
    pageFourHeading.style.transform = 'translateY(0px)';
  }
  if(currScrollPosition >1800){
    pageFourBrandLogos.style.opacity = '100';
  }
 

  //Section 5 Animations
  if (currScrollPosition > 2300){
    sectionFiveAllCards.style.opacity = '100';
    sectionFiveAllCards.style.transform = 'translateY(0px)';
  }
  if(currScrollPosition >2500){
    sectionFiveSeeMore.style.opacity = '100';
  }
  prevScrollPosition = currScrollPosition;

  //Section 6 Animations
  if (currScrollPosition > 2800){
    sectionFiveAllCards.style.opacity = '100';
    sectionFiveAllCards.style.transform = 'translateY(0px)';
  }
  if(currScrollPosition >3000){
    sectionSixSlides.style.opacity = '100';
    sectionSixSlides.style.transform = 'translateY(0px)';
  }

  if(currScrollPosition > 3400){
    sectionSevenCard.style.transform = 'translateY(-12rem)'
  }

  prevScrollPosition = currScrollPosition;
});

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

//Carousel Animation

// const carousel = document.querySelector('.carousel-wrapper');
// const slide = document.querySelector('.carousel-slide');
// const circles = document.querySelectorAll('.circle');
// let currentIndex = 0;
// // slide.style.transform = 'translate(50vw)'
// // let currentIndex = 1;
// function greyOut(){
//   circles.forEach((circle)=>{
//     circle.classList.remove('active');
//   });
  
// }

// circles.forEach((circle, index) =>{
//   circle.addEventListener('click', ()=>{
//     greyOut();
//     circle.classList.add('active');
//       if(index > 0){carousel.scrollLeft = (index+1)*slide.offsetWidth;};
//       if(index === 0){carousel.scrollLeft = (index)*slide.offsetWidth;};
//   });
// })

// let isDragging = false, startX, startScrollLeft;

// const startDrag = (e)=>{
//   isDragging = true;
//   carousel.classList.add('dragging');
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// };



// const dragging = (e)=>{
//   if (!isDragging){return};
  
  
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// };
// const stopDrag = ()=>{
//   isDragging = false
//   carousel.classList.remove('dragging');
// };

// carousel.addEventListener('mousedown', startDrag);
// carousel.addEventListener('mousemove', dragging);
// carousel.addEventListener('mouseup', stopDrag);





//Page one and two animations

//Carousel with SwipperJS

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  initialSlide: 2,
  breakpoints: {
    // When window width is >= 768px
    900: {
       // Number of slides per view at this breakpoint
      slidesPerView: 1.7,
    }
  },
  // autoplay: {
  //   delay: 3000,
  // },

  
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});




gsap.from("#middiv",{
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