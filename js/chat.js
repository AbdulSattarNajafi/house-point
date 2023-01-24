'use-strict';

// Show & Hide Modals
const modalTogglerBtns = document.querySelectorAll('.modal-toggler-btn');
const modalCloseBtns = document.querySelectorAll('.modal__header-btn');


modalTogglerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnDataset = btn.dataset.toggle;
        document.querySelector(`.${btnDataset}`).classList.add('show');
    });
});

modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnToggle = btn.dataset.toggle;
        document.querySelector(`.${btnToggle}`).classList.remove('show');
    });
});


// Chat modals
const chatModalBTns = document.querySelectorAll('.new-chat-modal-btn');
const chatModal = document.querySelector('.new-chat-modal');

chatModalBTns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnDataset = btn.dataset.toggle;
        chatModal.classList.remove('show');
        document.querySelector(`.${btnDataset}`).classList.add('show');
    });
});

// Announcement Tabs
const tabBtns = document.querySelectorAll('.announcement-tab-btn');
const tabContents = document.querySelectorAll('.announcement-tab');

tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const inactiveTab = document.querySelector(`.${btn.dataset.toggle}`);

        if (btn.classList.contains('active')) return;

        tabBtns.forEach(btn => {
            btn.classList.remove('active')
        })

        tabContents.forEach((tab) => {
            tab.classList.add('hide');
        });

        btn.classList.add('active');
        inactiveTab.classList.remove('hide');
    })
});

// Chat Group Tabs
const chatTabBtns = document.querySelectorAll('.chat-tab-btn');
const chatTabContents = document.querySelectorAll('.chat-group-tab');

chatTabBtns.forEach(chatBtn => {
    chatBtn.addEventListener('click', (e) => {
        const inactiveTab = document.querySelector(`.${chatBtn.dataset.toggle}`);

        if (chatBtn.classList.contains('active')) return;

        chatTabBtns.forEach((btn) => {
            btn.classList.remove('active');
        });

        chatTabContents.forEach((tab) => {
            tab.classList.add('hide');
        });

        chatBtn.classList.add('active');
        inactiveTab.classList.remove('hide');
    });
})

// Show Selected people for chat
const chatGroups = document.querySelectorAll('.chat-group-items');
const chatGroupRows = document.querySelectorAll('.chat-group-items .chat__tabs-row');
const selectedPeople = document.querySelector('.group-chat-selected');

chatGroupRows.forEach(row => {
    row.addEventListener('click', () => {
        chatGroups.forEach(chatGroup => {
            chatGroup.parentElement.parentElement.classList.add('people-selected')
        })
        selectedPeople.classList.remove('hide');
    })
})

const announce = document.querySelectorAll('.announcement-items');
const announceRows = document.querySelectorAll('.announcement-items .chat__tabs-row');
const announceSelected = document.querySelector('.announcement-selected-row');

announceRows.forEach((row) => {
    row.addEventListener('click', () => {
        announce.forEach((item) => {
            item.parentElement.parentElement.classList.add('people-selected');
        });
        announceSelected.classList.remove('hide');
    });
});

// Chat forms
const chatForms = document.querySelectorAll('.chat__tabs-tab');

chatForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        window.location = './chat-detail.html'
    })
})