'use-strict';

// 
const layout = document.querySelector('.layout');
let screenHeight = window.innerHeight;
layout.style.height = `${screenHeight}px`;

window.addEventListener('resize', () => {
  screenHeight = window.innerHeight;
  layout.style.height = `${screenHeight}px`;
  console.log(screenHeight);
})

// Toggle Dropdown
const dropdownBtn = document.querySelector('.search__dropwdown-btn');
const dropdownCloseBtn = document.querySelector('.search__dropwdown-close');
const dropdown = document.querySelector('.search__dropwdown-dropwdown');
const dropdownOverlay = document.querySelector('.dropdown-backdrop');
const dropdownLinks = document.querySelectorAll('.search__dropwdown-link');

dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
    dropdownOverlay.classList.toggle('show');
});

dropdownCloseBtn.addEventListener('click', () => {
    dropdown.classList.remove('show');
    setTimeout(() => {
        dropdownOverlay.classList.remove('show');
    }, 200);
});

dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdownOverlay.classList.remove('show');
        dropdown.classList.remove('show');
    });
})

// Dark & Light Mode
const circleToggle = document.querySelector('#dark-light-mode');


let lightMode = localStorage.getItem('lightMode');

// Enabling light Mode
const enabledLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightMode', 'enabled');
};

// Disabling Light Mode
const disabledLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightMode', null)
}

// Checking if the window refreshed
if(lightMode === 'enabled') {
  enabledLightMode();
  circleToggle.classList.add('circle-move');
}

// Eventlistenr for the Toggle Button
circleToggle.addEventListener('click', () => {

  lightMode = localStorage.getItem('lightMode');

  if(lightMode !== 'enabled'){
    enabledLightMode();
  } else {
    disabledLightMode();
  }

});
