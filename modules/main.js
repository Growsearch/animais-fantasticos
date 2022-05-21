
                                  // selecionando as imagens no click 
const img = document.querySelector('img');

function callback(event){
    console.log(event.target);
}

img.addEventListener('click' , callback);

const animaislista = document.querySelector('.animais-lista');

animaislista.addEventListener('click' , callback);

                                 // LINK EXTERNO -- preventDefault

const linkexterno = document.querySelector('a[href^="http"]');

function handlelinkexterno(event){
    event.preventDefault();
    console.log(event);
}

linkexterno.addEventListener('click' , handlelinkexterno);
//feito a fase do preventDefault

                               //  testando responsividade com imagens

const listaImg = document.querySelector('.animais-lista')


const small = window.matchMedia('(max-width: 600px)');
  if(small.matches){
     console.log('Tela menor que 600px');
  }else{
     console.log('Tela maior que 600px');
}
console.log(small);

          // Manipulando elementos -- é possivel mover elementos no DOM com métodos de Node. 

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const copiaMenu = menu.cloneNode(true);

copy.appendChild(copiaMenu);

// Navegação por tab-menu --  imagens relacionadas

function initTabNav() {

const tabMenu = document.querySelectorAll('.js-tabmenu > li');
const tabContent = document.querySelectorAll('.js-tabcontent > section');

if(tabMenu.length && tabContent.length){
tabContent[0].classList.add('ativo');

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    }); 
    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    })
});
}                           
}

initTabNav();

//     PARTE DE FAQ !!!     

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
    if(accordionList.length) {
        accordionList[0].classList.toggle(activeClass);
        accordionList[0].nextElementSibling.classList.toggle(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click' , activeAccordion);
        });
    }   
}

initAccordion();

                // abaixo, as configurações de js-menu para scroll suave.

function initScroll(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    const topo = section.offsetTop;

    window.scrollTo({
        top: topo , 
        behavior: 'smooth'
    });
}

linksInternos.forEach((link) => {
    link.addEventListener('click' , scrollToSection);
});
}

initScroll();

     // ANIMANDO SCROLL 
function initeAnimaçaoScroll() {
const sections = document.querySelectorAll('.js-scroll');
if(sections.length){
const windowMetade = window.innerHeight * 0.6 ;

function animaScroll(){
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible){
            section.classList.add('ativo');
        }else if(section.classList.contains('.ativo')) {
            section.classList.remove('.ativo');
        }
    });
}

animaScroll();

window.addEventListener('scroll' , animaScroll);
}
}
initeAnimaçaoScroll();