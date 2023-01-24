
let lightMode = localStorage.getItem('lightMode');

// Enabling light Mode
const enabledLightMode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightMode', 'enabled');
};

// Disabling Light Mode
const disabledLightMode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightMode', null);
};

// Checking if the window refreshed
if (lightMode === 'enabled') {
    enabledLightMode();
} else {
    disabledLightMode();
}

