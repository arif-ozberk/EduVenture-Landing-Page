
// Sidebar Collapse
const hamburgerBtn = document.querySelector(".hamburger-button");
const navLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll(".navbar-links li a");


const hamburgerBtnHandler = () => {
    navLinks.classList.toggle("sidebar-active");

    links.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = "";
        }
        else {
            link.style.animation = `linkFadeIn 0.3s forwards ${index / 7 + 0.2}s`;
        }
    })
}

hamburgerBtn.addEventListener("click", hamburgerBtnHandler);

links.forEach(link => {                     // Sidebar closing on link click
    link.addEventListener("click", () => {
        navLinks.classList.remove("sidebar-active");
        links.forEach(li => {
            li.style.animation = "";
        })
    })
});


// Welcome Page Image Slider
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const imageTrain = document.querySelector(".landscapes");
const imageFrame = document.querySelector(".welcome-top");
const welcomeImg = document.querySelectorAll(".landscapes img")
const firstImage = document.querySelector("#first-image");
const lastImage = document.querySelector("#last-image");

let currentPush = 1;
let isClicked = false;
imageTrain.style.transform = `translateX(${currentPush * -welcomeImg[0].clientWidth}px)`;


const nextBtnHandler = () => {   // Next Button Function
    if(currentPush >= welcomeImg.length - 1) return;
    currentPush++;
    imageTrain.style.transition = "transform 1s ease-in-out";
    imageTrain.style.transform = `translateX(${currentPush * -welcomeImg[0].clientWidth}px)`;
}

const prevBtnHandler = () => {  // Prev Button Function
    if(currentPush <= 0) return;
    currentPush--;
    imageTrain.style.transition = "transform 1s ease-in-out";
    imageTrain.style.transform = `translateX(${currentPush * -welcomeImg[0].clientWidth}px)`;
}

const nextBtnClick = () => {
    isClicked = true;
    nextBtnHandler();
    setTimeout(() => {
        isClicked = false;
    }, 10000);
}

const prevBtnClick = () => {
    isClicked = true;
    prevBtnHandler();
    setTimeout(() => {
        isClicked = false;
    }, 10000);
}


nextBtn.addEventListener("click", nextBtnClick);
prevBtn.addEventListener("click", prevBtnClick);

imageTrain.addEventListener("transitionend", () => {    // Endless Cycle Function
    if(welcomeImg[currentPush].id === "last-image") {
        imageTrain.style.transition = "none";
        currentPush = welcomeImg.length - 2;
        imageTrain.style.transform = `translateX(${currentPush * -welcomeImg[0].clientWidth}px)`;
    }
    else if(welcomeImg[currentPush].id === "first-image") {
        imageTrain.style.transition = "none";
        currentPush = welcomeImg.length - currentPush;
        imageTrain.style.transform = `translateX(${currentPush * -welcomeImg[0].clientWidth}px)`;
    }
});


setInterval(() => {
    if(isClicked) return;
    nextBtnHandler();
}, 5000);


// Info Section Accordion
const accordionBtn = document.querySelectorAll(".accordion-button");
const accordion = document.querySelectorAll(".accordion");


accordionBtn.forEach((button, index) => {

    button.addEventListener("click", () => {
        if(accordion[index].classList.contains("accordion-active")) {
            button.style.transition = "transform 0.5s ease 0.5s";
            button.style.transform = "rotate(0deg)";
        }
        else {
            button.style.transition = "transform 0.5s ease";
            button.style.transform = "rotate(180deg)";
        }

        accordion[index].classList.toggle("accordion-active");
    });
});
