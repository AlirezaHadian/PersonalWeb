/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("main_nav-menu"),
  navToggle = document.getElementById("main_nav-toggle"),
  navClose = document.getElementById("main_nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".main_nav_link");

function linkAction() {
  const navMenu = document.getElementById("main_nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close'
  }
  if(itemClass === 'skills_content skills_close'){
    this.parentNode.className = 'skills_content skills_open'
  }
}

skillsHeader.forEach((el)=> {
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
  modalBtns = document.querySelectorAll('.services_button'),
  modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}  

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click',()=> {
    modal(i)
  })
})

modalCloses.forEach((modalClose)=> {
  modalClose.addEventListener('click', ()=> {
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal')
    })
  })
})
/*==================== PORTFOLIO SWIPER  ====================*/
    let swiper = new Swiper('.main_portfolio_container', {
       cssMode: true,
       loop: true,
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       }
     });

/*==================== PORTFOLIO MODAL ====================*/
function openModal() {
  document.getElementById("portfolioModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("portfolioModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.main_nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.main_nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
  const nav = document.getElementById('main_header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=======================IMAGE POPUP====================== */
document.querySelectorAll('.main_cerificates_container img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup_image').style.display = 'block';
    document.querySelector('.popup_image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup_image span').onclick = ()=>{
  document.querySelector('.popup_image').style.display = 'none';
}


/*========================CHANGE THE THEME COLOR======== */
function changeTheme() {
  const slider = document.getElementById("hue-slider");
  const hueValue = slider.value;
  var root = document.querySelector(':root');
  var rootStyle =  getComputedStyle(root);
  // Convert hue value to HSL format
  root.style.setProperty('--hue-color', hueValue);
  //rootStyle.getPropertyValue('--hue-color') = hueValue;

  document.body.style.backgroundColor = hslColor;
  // Add other CSS changes for your theme (e.g., text color, button styles, etc.)
  // For example: document.body.style.color = "your-color";

  // Update the slider thumb color to match the selected hue
  const thumb = document.querySelector(".slider::-webkit-slider-thumb");
  thumb.style.backgroundColor = hslColor;

  // Update the slider value display
  const sliderValue = document.getElementById("slider-value");
  sliderValue.innerHTML = hueValue;
}

const showVolumeButton = document.getElementById('color-theme-button');
const volumeContainer = document.getElementById('popover');

showVolumeButton.addEventListener('click', () => {
  volumeContainer.style.display = 'block';
  volumeContainer.style.animation = "fadeIn 0.3s ease-in-out";
  
});

document.addEventListener('click', (event) => {
  if (!volumeContainer.contains(event.target) && event.target !== showVolumeButton) {
    volumeContainer.style.display = 'none';
    volumeContainer.style.animation = "fadeOut 0.3s ease-in-out";
  }
});


// Update the slider value display
const slider = document.getElementById("hue-slider");

slider.oninput = function() {
  changeTheme(); // Call the changeTheme function when the slider is moved
};


