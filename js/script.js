const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-link");

/* ----------- para rodar os codigos dos Scroll ----------- */
window.addEventListener("scroll", () => {
  activeLink();
  if(!skillsPlayed) skillsCounter();
  if(!mlPlayed) mlCounty();
  
});

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
/* ----------- progresso de animação de barra ----------- */

function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;
  
  if(window.innerHeight >= topPosition +el.offsetHeight) return true;
  return false;
}


let skillsPlayed = false;

function skillsCounter() {
  if(!hasReached(first_skill)) return;

  let skillsPlayed = true;

  sk_counters.forEach((counter, i) => {
  let target = +counter.dataset.target;
  let strokeValue = 427 - 427 * (target / 100);

  progress_bars[i].style.setProperty("--target", strokeValue);

  setTimeout(() =>{
      updateCount(counter,target);
  }, 400);    
});

  progress_bars.forEach(
      (p) =>(p.style.animation = "progress 2s ease-in-out forwards")
      );
}

    /* ----------- contagem de serviços Navbar ----------- */

    let mlPlayed = false;

    function mlCounty() {
        if(!hasReached(ml_section)) return;
        mlPlayed = true;
        ml_counters.forEach((ctr) => {
            let target = +ctr.dataset.target;
            
            setTimeout(() => {
                updateCount(ctr, target);
            }, 400);
        });
    }
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

 /* ----------- arquivos do portfolio Navbar ----------- */
 
 let mixer = mixitup('.gallery', { 
   selectors: {
     target: '.card'
    },
  animation: {
    duration: 500,
  },
});

/* ----------- arquivos do portfolio Navbar ----------- */
var acc = document.getElementsByClassName("accordion");
var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.parentElement.classList.toggle("active");

      var pannel = this.nextElementSibling;

      if (pannel.style.display === "block") {
        pannel.style.display = "none";
      } else {
        pannel.style.display = "block";
      }
    });
  }
