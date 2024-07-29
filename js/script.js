const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-link");

/* ----------- codigo do Navbar ----------- */

function stickNavbar(){
    header.classList.toggle("scrolled",window.scrollY > 0);
 }
 
 stickNavbar();
 
 window.addEventListener("scroll", stickNavbar);
 
/* ----------- abrir e fechar navbar menu ----------- */

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

/* ----------- scroll do link active ----------- */

function activeLink() {
    let sections = document.querySelectorAll("section[id]");    
    let passedSections = Array.from(sections).map((sct, i) => {
        return {
            y:  sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        };
    })
    .filter((sct) => sct.y <= 0);
    let currSectionID = passedSections.at(-1).id;
    
    links.forEach((l) => l.classList.remove("active"));
    links[currSectionID].classList.add("active");
} 
activeLink();


/* ----------- swiper home ----------- */
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper3 = new Swiper(".tuor", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 700,
    loop: true,
    rotate: true,
    autoplay: {
      delay: 700,
      disableOnInteraction: false,
    },
    mousewheel: {
      invert: false,
    },
});