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