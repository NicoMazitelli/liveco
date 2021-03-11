
function mathRandom(min, max) {
    return Math.random() * (max - min) + min;
}

class ParticlesSystem {
    constructor() {
        this.container = document.getElementById("ps-container");
        this.particle = "<3";
        this.animation = "";
        this.emitter = new Emitter(this.particle, this.container);
    }

    init() {
        this.emitter.init()
    }
}

class Emitter {
    constructor(classname, container) {
        this.cooldown = 300;
        this.lifespan = 2000;
        this.classname = classname;
        this.position = { top: 0, left:0 };
        this.container = container;
        this.particleTemplate = new Particle(classname, this.lifespan, this.position, this.container);
        this.particles = [];
    }

    init() {
        this.spawnInterval();
    }
    
    spawnInterval() {
        setTimeout(() => {
            console.log("spawning particle")
            var particle =  new Particle(this.classname, this.lifespan, {top: "72vh", left: 200 + "px"}, this.container);
            particle.spawn();
            this.spawnInterval();
        }, 
        this.cooldown);
    }
}

class Particle {
    constructor(classname, lifespan, position, container) {
        this.color = "red";
        this.position = position;
        this.element = document.createElement("div");
        
        this.element.classList.add(classname);
        this.element.style.position = "absolute";
        this.element.style.left = this.position.left;
        this.element.style.top = this.position.top;
        this.classname =  mathRandom(0,10) > 5 ? "fadeInDownRight" : "fadeInDown";
        this.element.innerHTML = '<svg class="animated '+this.classname +'" style="height: 18px; width: 18px; fill: #3583fa; z-index: 100;"  viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.0" fill-rule="evenodd"><path d="M10.977 2.705C11.93 1.618 13.162 1 14.895 1c3.333 0 5.607 2.152 5.607 6.274 0 .08-.002.16-.005.24-.107 2.596-1.876 5.253-4.737 7.892a33.77 33.77 0 0 1-3.165 2.57 32.447 32.447 0 0 1-1.45.983l-.394.243-.394-.243-.009-.005-.021-.014-.08-.05a32.447 32.447 0 0 1-1.34-.914 33.77 33.77 0 0 1-3.165-2.57c-2.86-2.639-4.63-5.296-4.737-7.892A5.839 5.839 0 0 1 1 7.274C1 3.152 3.274 1 6.607 1c1.733 0 2.966.618 3.918 1.705.056.064.137.165.226.282.09-.117.17-.218.226-.282z"></path></g></svg>';
        this.lifespan = lifespan;
        this.container = container;
    }

    spawn() {
        this.container.append(this.element);
        setTimeout( () => {
            console.log("destroying")
            this.container.removeChild(this.element);
        }, this.lifespan);
    }
}

var particleSystem = new ParticlesSystem();
//particleSystem.init();