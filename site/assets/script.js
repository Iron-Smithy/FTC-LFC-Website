const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
    const isMobile = e.matches
    console.log(isMobile)
    if(isMobile){
        navbar.setAttribute('inert', '')
    }
    else{
        // desktop device
        navbar.removeAttribute('inert')
    }
}

function openSidebar(){
    navbar.classList.add('show')
    navbar.removeAttribute('inert')
}

function closeSidebar(){
    navbar.classList.remove('show')
    navbar.setAttribute('inert', '')
}

updateNavbar(media)

// Carousel
let image = 0;
let imagesData = [];

fetch('assets/carouselData.json')
    .then(response => response.json())
    .then(data => {
        imagesData = data;
        updateCarousel();
    });

function changeImage(dir) {
    if (!imagesData.length) return;
    image = (image + dir + imagesData.length) % imagesData.length;
    updateCarousel();
}

function updateCarousel() {
    const imgEl = document.querySelector('.carousel-image-box-image');
    const titleEl = document.querySelector('.carousel-text-box h2');
    const descEl = document.querySelector('.carousel-text-box p');

    const current = imagesData[image];

    imgEl.src = current.src;
    titleEl.textContent = current.title;
    descEl.textContent = current.desc;
    imgEl.style.objectFit = current.fit || "cover";
}

const secretPassword = "arrowdownarrowleftarrowuparrowdownarrowup";
let inputSequence = ''; // down left up down up
document.addEventListener('keydown', (e) => {
    inputSequence = (inputSequence + e.key.toLowerCase()).slice(-secretPassword.length);
    if (inputSequence === secretPassword) {
        window.location.href = '(•‿•).html'; 
        // window.open('https://www.cool.com', '_blank');
    }
});
