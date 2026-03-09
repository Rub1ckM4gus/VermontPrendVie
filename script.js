function scrollControl() {
    let links = document.querySelectorAll('a[href*="#"]');
    for (let i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(event){
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
    scrollControl();
}

// intégration Swiper Javascript
new Swiper('.img-wrapper', {
  loop: true,

  // Pagination des points
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },

  // Flêches Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//gestion des checkbox et leur application classe CSS
const checkboxRecherche = document.getElementById("animationID");
const animationG = document.querySelector(".imagesAnimG");
const animationD = document.querySelector(".imagesAnimD");

checkboxRecherche.addEventListener('change', function() {
    animationG.classList.toggle('visible', this.checked);
    animationD.classList.toggle('visible', this.checked);
});

const checkboxReferences = document.getElementById("visionnementID");
const galerieG = document.querySelector(".imagesSuppG");
const galerieD = document.querySelector(".imagesSuppD");

checkboxReferences.addEventListener('change', function() {
    galerieG.classList.toggle('visible', this.checked);
    galerieD.classList.toggle('visible', this.checked);
});

const checkboxProgrammation = document.getElementById("programmationID");
const programmationG = document.querySelector(".imagesProgG");
const programmationD = document.querySelector(".imagesProgD");

checkboxProgrammation.addEventListener('change', function() {
    programmationG.classList.toggle('visible', this.checked);
    programmationD.classList.toggle('visible', this.checked);
});