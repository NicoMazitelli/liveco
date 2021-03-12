var jazzCarousel = document.getElementById("jazz-carousel");
var jazzCarouselContainer = document.getElementsByClassName("carousel-container")[0];
var cards = jazzCarousel.getElementsByClassName("card");
var carrouselTitleContainer = document.getElementsByClassName("group-current")[0];
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

function showCarrouselTitle() {
    carrouselTitleContainer.classList.add("active");
}

function showCard(index) {
    cards[index].classList.add("active");
}

function highlightCard(index) {
    // console.log(cards, index, cards[index]);
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
        showCard(6);
        setDebugText(debug, "5s", "carousel appears");
    }, 5000);

    // setTimeout(() => {
    //     // Highlight first card
    //     setDebugText(debug, "10s", "highlight first card");
    //     highlightCard(0)
    // }, 10000);

    setTimeout(() => {
        // Second card appears and highlights
        // remove highlight from first card 
        
        setDebugText(debug, "10s", "highlight only second card");
        transitionToCard(5)
    }, 15000);

    setTimeout(() => {
        // Third card appears and highlights
        // remove highlight from second card 
        setDebugText(debug, "20s", "highlight only third card");
        transitionToCard(4)
        
    }, 20000)

    setTimeout(() => {
        // fourth card appears and highlights
        // Third highlight from second card 
        setDebugText(debug, "25s", "highlight only fourth card");
        transitionToCard(3)
    }, 25000);

    setTimeout(() => {
        // fifth card appears and highlights
        // fourth highlight from second card 
        setDebugText(debug, "30s", "highlight only fifth card");
        transitionToCard(2)
    }, 30000);

    setTimeout(() => {
        // sixth card appears and highlights
        // fifth highlight from second card 
        setDebugText(debug, "35s", "highlight only sixth card");
        transitionToCard(1)
    }, 35000);

    setTimeout(() => {
        // seventh card appears and highlights
        // sixth highlight from second card 
        setDebugText(debug, "40s", "highlight only seventh card");
        transitionToCard(0)
    }, 40000);

    setTimeout(() => {
        // add highlight to fifth card
        setDebugText(debug, "45s", "add highlight to fifth card");
        removeHighlightCard(0);
        // reset the animation
        void cards[6].offsetWidth;
        highlightCard(6);
        highlightCard(0);
    }, 45000);

    setTimeout(() => {
        // User hearts first car
        setDebugText(debug, "50s", "User hearts fifth card");
        removeHighlightCard(6);
        favCard(1);
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
        cards[5].style.order = 2;
    }, 54000);

    setTimeout(() => {
        // shut carousel
        setDebugText(debug, "56s", "shut carousel");                   
        hideCarousel();
    }, 56000);
}

wholeAnimation()

function scrollToRight() {
    var maxScrollLeft = jazzCarousel.scrollWidth - jazzCarousel.clientWidth;
    jazzCarousel.scrollLeft = maxScrollLeft;
}

function cardAnimation() {
    for(var i = cards.length - 1; i > 0; i--) {
        if(cards[i].className.indexOf("active") != -1) {
            cards[i].style.transition = "transform 0.5s ease";
            cards[i].style.transform = "translate(-120px, 0px)";
        }
    }
}

function transitionToCard(card) {
    removeHighlightCard(card + 1);
    cardAnimation();
    setTimeout(() => {
        showCard(card);
        highlightCard(card);
        removeTransform();
        scrollToRight();
    }, 250);
}

function removeTransform() {
    for(var i = 0; i < cards.length; i++) {
        if(cards[i].className.indexOf("active") != -1) {
            cards[i].style = null;
        }
    }
}