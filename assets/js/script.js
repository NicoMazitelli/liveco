var jazzCarousel = document.getElementById("jazz-carousel");
var cards = jazzCarousel.getElementsByClassName("card");
var jazzCircle = document.getElementById("jazzcircle")
function wholeAnimation() {
    setTimeout(() => {
        // Carousel appears
        jazzCircle.classList.add("highlight");
        jazzCarousel.classList.remove("slideDown");
        cards[0].classList.add("active");
        // (5s, "carousel appears");
    }, 5000);

    setTimeout(() => {
        // Highlight first card
        // (10s, "highlight first card");
        cards[0].classList.add("highlight");
    }, 10000);

    setTimeout(() => {
        // Second card appears and highlights
        // remove highlight from first card 
        
        // (15s, "highlight only second card");
        cards[0].classList.remove("highlight");
        cards[1].classList.add("active");
        cards[1].classList.add("highlight");
    }, 15000);

    setTimeout(() => {
        // Third card appears and highlights
        // remove highlight from second card 
        // (20s, "highlight only third card");
        cards[1].classList.remove("highlight");
        cards[2].classList.add("active");
        cards[2].classList.add("highlight");
    }, 20000);

    setTimeout(() => {
        // add highlight to second card
        // (25s, "add highlight to second card");
        cards[2].classList.remove("highlight");
        void cards[2].offsetWidth;
        cards[2].classList.add("highlight");
        cards[1].classList.add("highlight");
    }, 25000);

    setTimeout(() => {
        // fourth card appears and highlights,
        // Remove other highlights
        // (30s, "fourth card appears and highlights");
    
        cards[1].classList.remove("highlight");
        cards[2].classList.remove("highlight");
        cards[3].classList.add("active");
        cards[3].classList.add("highlight");
    }, 30000);

    setTimeout(() => {
        // User hearts first car
        // (35s, "User hearts second car");
        cards[0].getElementsByClassName("card-actions")[0].classList.add("favorited");
    }, 35000);
    
    setTimeout(() => {     
        // Spawn PS
        // (38s, "Spawn particle system");                   
        var particleSystem = new ParticlesSystem();
        particleSystem.init();
    }, 38000);

    setTimeout(() => {     
        // Spawn PS
        // (40s, "Reorder card with particle system");                   
        cards[1].style.order = 2;
    }, 40000);
}
wholeAnimation()