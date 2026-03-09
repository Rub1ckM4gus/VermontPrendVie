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

const checkboxReferences = document.getElementById("visionnementID");
const galerieG = document.querySelector(".imagesSuppG");
const galerieD = document.querySelector(".imagesSuppD");

checkboxReferences.addEventListener('change', function() {
    galerieG.classList.toggle('visible', this.checked);
    galerieD.classList.toggle('visible', this.checked);
});