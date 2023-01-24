'use-strict';

// House Card Modals
const dropdownBtns = document.querySelectorAll('.search__dropwdown-link');
const houseCards = document.querySelectorAll('.houses__card');
const modalCloseBtns = document.querySelectorAll('.modal__header-btn');

houseCards.forEach(card => {
    card.addEventListener('click', () => {
        const cardId = card.dataset.id;
        document.querySelector(`.${cardId}`).classList.add('show');
    })
});

dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnId = btn.dataset.id;
        document.querySelector(`.${btnId}`).classList.add('show');
    });
});

modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const btnToggle = btn.dataset.toggle;
        document.querySelector(`.${btnToggle}`).classList.remove('show');
    })
});

// Tabs
const ogniskoTabHeaderBtns = document.querySelectorAll('.ognisko-tab-header .addpoints__tabs-btn');
const ogniskoTabs = document.querySelectorAll('.ognisko-tab-content');

const reveurTabHeaderBtns = document.querySelectorAll('.reveur-tab-header .addpoints__tabs-btn');
const reveurTabs = document.querySelectorAll('.reveur-tab-content');

const hufflepufTabHeaderBtns = document.querySelectorAll('.hufflepuf-tab-header .addpoints__tabs-btn');
const hufflepufTabs = document.querySelectorAll('.hufflepuf-tab-content');

const ubnutuTabHeaderBtns = document.querySelectorAll('.ubuntu-tab-header .addpoints__tabs-btn');
const ubnutuTabs = document.querySelectorAll('.ubuntu-tab-content');

const multiTabHeaderBtns = document.querySelectorAll(
    '.multi-points-tab-header .addpoints__tabs-btn'
);
const multiTabs = document.querySelectorAll('.multi-points-tab-content');

showHideTabs(ogniskoTabHeaderBtns, ogniskoTabs);
showHideTabs(reveurTabHeaderBtns, reveurTabs);
showHideTabs(hufflepufTabHeaderBtns, hufflepufTabs);
showHideTabs(ubnutuTabHeaderBtns, ubnutuTabs);
showHideTabs(multiTabHeaderBtns, multiTabs);

function showHideTabs(tabButtons, tabs) {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const inactiveTab = document.querySelector(`.${btn.dataset.toggle}`);

            if (btn.classList.contains('active')) return;

            tabButtons.forEach((btn) => {
                btn.classList.remove('active');
            });

            tabs.forEach((tab) => {
                tab.classList.remove('active');
            });

            btn.classList.add('active');
            inactiveTab.classList.add('active');
        });

    })
}