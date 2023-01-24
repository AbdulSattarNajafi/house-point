'use-strict';

// Slide rows
let isDown = false;
let transitionCount = 0;
let mouseTravel;

const studentRows = document.querySelectorAll('.chat__friends-row');

studentRows.forEach((row) => {
    row.addEventListener('mousedown', (e) => {
        isDown = true;
        transitionCount = e.clientX;
    });

    row.addEventListener('mouseup', () => {
        isDown = false;
    });

    row.addEventListener('mousemove', (e) => {
        if (isDown) {
            mouseTravel = e.clientX - transitionCount;

            if (mouseTravel < -40) {
                mouseTravel = -135;
            } else {
                mouseTravel = 0;
            }

            row.style.transform = `translateX(${mouseTravel}px)`;
        }
    });
});

// Show & Hide Chat area
const chat = document.querySelector('.chat');
const chatCloseBtn = document.querySelector('.chat__form-close');
const chatBackkBtn = document.querySelector('.chat__area-btn');

studentRows.forEach(row => {
    row.addEventListener('click', () => {
        chat.classList.add('chat-active')
    })
});

chatCloseBtn.addEventListener('click', () => {
    chat.classList.remove('chat-active');
});

chatBackkBtn.addEventListener('click', () => {
    chat.classList.remove('chat-active');
});