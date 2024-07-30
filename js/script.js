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

/* ----------- arquivos do portfolio Navbar ----------- */
const filterButtons = document.querySelectorAll(".btns button")
const filterableCards = document.querySelectorAll(".gallery .card")

// definir a função filterCards
const filterCards = e =>{
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  //interar sobre cada cartão filtrável
  filterableCards.forEach(card => {
    //Adicione a classe "hide" para ocultar o cartão inicialmente
    card.classList.add("hide");
    //verifique se o cartão corresponde ao filtro selecionado ou se "todos" está selecionado
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      console.log("ai dento")
      card.classList.remove("hide");
    }
  });
};

//adicionar ouvinte de evento de clique a cada botão de filtro
filterButtons.forEach(button => button.addEventListener("click", filterCards));
