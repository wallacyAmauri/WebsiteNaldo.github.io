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
const filterButtons = document.querySelectorAll(".btns button")
const filterableCards = document.querySelectorAll(".gallery .card")

const activeButton = document.querySelector('button[data-name="all"]');
    if (activeButton) {
        activeButton.classList.add('active');
    }
// definir a função filterCards
const filterCards = e =>{
  activeButton.classList.remove('active')
  console.log(e);
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  //interar sobre cada cartão filtrável
  filterableCards.forEach(card => {
    //Adicione a classe "hide" para ocultar o cartão inicialmente
    card.classList.add("hide");
    //verifique se o cartão corresponde ao filtro selecionado ou se "todos" está selecionado
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      card.classList.remove("hide");
    }
  });
};

//adicionar ouvinte de evento de clique a cada botão de filtro
filterButtons.forEach(button => button.addEventListener("click", filterCards));
