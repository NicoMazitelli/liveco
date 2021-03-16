var jazzCarousel = document.getElementById("jazz-carousel");
var jazzCarouselContainer = document.getElementsByClassName("carousel-container")[0];
var cards = jazzCarousel.getElementsByClassName("card");
var carrouselTitleContainer = document.getElementsByClassName("group-current")[0];
var executionTime = 0;
var events = [
    {
        action: (debug, timeWait) => {
            // Carousel appears
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "carousel appears");
            showCarousel();
            showCard(6);
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // Second card appears and highlights
            // remove highlight from first card
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "highlight only second card");  
            transitionToCard(5)
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // Third card appears and highlights
            // remove highlight from second card
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "highlight only third card");
            transitionToCard(4)
            showCarrouselTitle();
            scrollToRight();
            scrollToRight();
            scrollToRight();
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // fourth card appears and highlights
            // Third highlight from second card
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "highlight only fourth card");
            transitionToCard(3)
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // fifth card appears and highlights
            // fourth highlight from second card
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "highlight only fifth card");
            transitionToCard(2)
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // sixth card appears and highlights
            // fifth highlight from second card 
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "highlight only sixth card");
            transitionToCard(1)
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // seventh card appears and highlights
            // sixth highlight from second card
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "highlight only seventh card");
            transitionToCard(0)
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // add highlight to fifth card
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "add highlight to fifth card");
            removeHighlightCard(0);
            // reset the animation
            void cards[6].offsetWidth;
            highlightCard(0);
            orderFirstCardsToMiddlePositon();
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // User hearts first car
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "User hearts fifth card");
            removeHighlightCard(6);
            favCard(1);
        },
        timeToWait: 5000
    },
    {
        action: (debug, timeWait) => {
            // Spawn PS
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "People likes third card");
            var particleSystem = new ParticlesSystem();
            particleSystem.init();
        },
        timeToWait: 2000
    },
    {
        action: (debug, timeWait) => {
            executionTime += timeWait;
            setDebugText(debug, (executionTime/1000) + "s", "Reorder most liked card");
            // Reorder cards
            setDebugText(debug, "54s", "Reorder most liked card");
            animationFavorite();
        },
        timeToWait: 2000
    },
    // {
    //     action: (debug, timeWait) => {
    //         executionTime += timeWait;
    //         setDebugText(debug, (executionTime/1000) + "s", "shut carousel");
    //         // shut carousel
    //         removeHighlightCard(0);
    //         removeHighlightCard(6);
    //         hideCarousel();
    //     },
    //     timeToWait: 2000
    // }

];
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

function executeEvents(index = 0, debug = false) {
    if(index > events.length > 1) {
        return true;
    } else {
        setTimeout(() => {
            events[index].action(debug, events[index].timeToWait);
            executeEvents(index + 1, debug);
        }, events[index].timeToWait)
    }
}

// Uncomment next line to show groups
// groupElements(); 
carouselElements();
executeEvents();

function scrollToRight() {
    var maxScrollLeft = jazzCarousel.scrollWidth - jazzCarousel.clientWidth;
    jazzCarousel.scrollLeft = maxScrollLeft;
}

function animationFavorite() {
    cards[5].style.transition = "transform 1s ease";
    cards[5].style.transform = "translate(485px, 0px)";

    setTimeout(() => {
        cards[5].style = {};
        cards[5].style.order = 2;
    }, 1000)
}

function orderFirstCardsToMiddlePositon() {
    cards[6].style.transition = "transform 1s ease";
    cards[6].style.transform = "translate(608px, 0px)";

    setTimeout(() => {
        cards[6].style = null;
        highlightCard(6);
    }, 1000)
}

function cardAnimation() {
    for (var i = cards.length - 1; i > 0; i--) {
        if (cards[i].className.indexOf("active") != -1) {
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
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].className.indexOf("active") != -1) {
            cards[i].style = null;
        }
    }
}