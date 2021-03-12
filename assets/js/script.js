var jazzCarousel = document.getElementById("jazz-carousel");
var jazzCarouselContainer = document.getElementsByClassName("carousel-container")[0];
var cards = jazzCarousel.getElementsByClassName("card");
// var jazzCircle = document.getElementById("jazzcircle")

function setDebugText(debug, timestamp, text) {
    if (debug) { document.getElementById("debug").innerHTML = "at " + timestamp + " - " + text };
}

function showCarousel() {
    //jazzCircle.classList.add("highlight");
    jazzCarouselContainer.classList.remove("slideDown");
}

function hideCarousel() {
    //jazzCircle.classList.remove("highlight");
    jazzCarouselContainer.classList.add("slideDown");
}

function showCard(index) {
    cards[index].classList.add("active");
}

function highlightCard(index) {
    cards[index].classList.add("highlight");
}

function removeHighlightCard(index) {
    cards[index].classList.remove("highlight");
}

function favCard(index) {
    cards[index].getElementsByClassName("card-actions")[0].classList.add("favorited");
}
function wholeAnimation(debug = false) {
    setTimeout(() => {
        // Carousel appears
        showCarousel();
        showCard(0);
        setDebugText(debug, "5s", "carousel appears");
    }, 5000);

    setTimeout(() => {
        // Highlight first card
        setDebugText(debug, "10s", "highlight first card");
        highlightCard(0)
    }, 10000);

    setTimeout(() => {
        // Second card appears and highlights
        // remove highlight from first card 
        
        setDebugText(debug, "15s", "highlight only second card");
        removeHighlightCard(0);
        showCard(1);
        highlightCard(1)
    }, 15000);

    setTimeout(() => {
        // Third card appears and highlights
        // remove highlight from second card 
        setDebugText(debug, "20s", "highlight only third card");
        removeHighlightCard(1);
        showCard(2);
        highlightCard(2);
        scrollToRight();
    }, 20000)

    setTimeout(() => {
        // fourth card appears and highlights
        // Third highlight from second card 
        setDebugText(debug, "25s", "highlight only fourth card");
        removeHighlightCard(2);
        showCard(3);
        highlightCard(3);
        scrollToRight();
    }, 25000);

    setTimeout(() => {
        // fifth card appears and highlights
        // fourth highlight from second card 
        setDebugText(debug, "30s", "highlight only fifth card");
        removeHighlightCard(3);
        showCard(4);
        highlightCard(4);
        scrollToRight();
    }, 30000);

    setTimeout(() => {
        // sixth card appears and highlights
        // fifth highlight from second card 
        setDebugText(debug, "35s", "highlight only sixth card");
        removeHighlightCard(4);
        showCard(5);
        highlightCard(5);
        scrollToRight();
    }, 35000);

    setTimeout(() => {
        // seventh card appears and highlights
        // sixth highlight from second card 
        setDebugText(debug, "40s", "highlight only seventh card");
        removeHighlightCard(5);
        showCard(6);
        highlightCard(6);
        scrollToRight();
    }, 40000);

    setTimeout(() => {
        // add highlight to fifth card
        setDebugText(debug, "45s", "add highlight to fifth card");
        removeHighlightCard(6);
        // reset the animation
        void cards[2].offsetWidth;
        highlightCard(4);
        highlightCard(6);
        scrollToRight();
    }, 45000);

    setTimeout(() => {
        // User hearts first car
        setDebugText(debug, "50s", "User hearts fifth card");
        favCard(0);
    }, 50000);
    
    setTimeout(() => {     
        // Spawn PS
        setDebugText(debug, "52s", "People likes third card");                   
        var particleSystem = new ParticlesSystem();
        particleSystem.init();
    }, 52000);

    setTimeout(() => {
        // Reorder cards
        setDebugText(debug, "54s", "Reorder most liked card");                   
        cards[1].style.order = 2;
    }, 54000);

    setTimeout(() => {
        // shut carousel
        setDebugText(debug, "56s", "shut carousel");                   
        hideCarousel();
    }, 56000);
}

wholeAnimation(true)

function scrollToRight() {
    var maxScrollLeft = jazzCarousel.scrollWidth - jazzCarousel.clientWidth;
    jazzCarousel.scrollLeft = maxScrollLeft;
}