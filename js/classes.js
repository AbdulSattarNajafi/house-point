'use-strict';

// Show & Hide Modals
const modalTogglerBtns = document.querySelectorAll('.modal-toggler-btn');
const addClassModal = document.querySelector('.add-class-modal');
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


// Add class 
const addClassForm = document.getElementById('add-class-form');
const classesClass = document.querySelector('.classes__class');
// const searchSection = document.querySelector('.search');
const classesTabs = document.querySelector('.classes__tabs');

const addPointsBtn = document.querySelector('#add-points-btn');
const addStudentBtn = document.querySelector('#add-student-btn');

addClassForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addClassModal.classList.remove('show');
    classesClass.classList.remove('hide');
    classesTabs.classList.remove('hide');
    // searchSection.classList.add('remove-shadow');
    addPointsBtn.classList.add('hide');
    addStudentBtn.classList.remove('hide');
});

// Show Grade
const classesContainer = document.querySelector('.classes__class');
const subjects = document.querySelectorAll('.class-subject');
const subjectsGrades = document.querySelector('#class-grade');

subjects.forEach((subject) => {
    subject.addEventListener('click', () => {
        subjectsGrades.classList.remove('hide');
        classesContainer.classList.add('increase-height')
    });
});

// Tabs
const tabBtns = document.querySelectorAll('.classes__tabs-btn');
const tabContents = document.querySelectorAll('.classes__tabs-content');
const classesMainContent = document.querySelector('.classes__main-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const inactiveTab = document.querySelector(`.${btn.dataset.toggle}`);
        classesMainContent.classList.add('hide');

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
})

// Add Student modal
const manuallyBtn = document.getElementById('add-student-manually-btn');
const studentModal = document.querySelector('.modal__student');
const studentModalContent = document.querySelector('.student-modal');
const studentForm = document.querySelector('.student-form');

const students = document.querySelectorAll('.student-form__add-item');
const notSelectedText = document.querySelector('.student-form__header-title');
const selectedStudents = document.querySelector('.student-form__header-students');

const studentsAvatar = document.querySelectorAll('.student-form__header-avatar');
const addStudents = document.querySelector('.student-form__add');
const editStudents = document.querySelector('.student-form__edit');


manuallyBtn.addEventListener('click', () => {
    studentModal.classList.add('hide');
    studentForm.classList.remove('hide');
    studentModalContent.classList.add('expand');
});

students.forEach(student => {
    student.addEventListener('click', () => {
        notSelectedText.classList.add('hide');
        selectedStudents.classList.remove('hide');
    })
});

studentsAvatar.forEach(avatar => {
    avatar.addEventListener('click', () => {
        addStudents.classList.add('hide');
        editStudents.classList.remove('hide');
    })
});

// Edit mode
const manageBtn = document.getElementById('manage-classes-btn');
const editDrawer = document.querySelector('.classes__edit-drawer');
const editDrawerContent = document.querySelector('.classes__edit-content');
const editCloseBtn = document.querySelector('.classes__edit-btn');


manageBtn.addEventListener('click', () => {
    editDrawer.classList.remove('hide');

    setTimeout(() => {
        editDrawerContent.classList.add('show')
    }, 100)
});

editCloseBtn.addEventListener('click', () => {
    editDrawerContent.classList.remove('show');

    setTimeout(() => {
        editDrawer.classList.add('hide');
    }, 450);
});

// Edit modal
const editModalBtn = document.getElementById('edit-modal-btn');
const closeEditModalBtn = document.getElementById('close-edit-modal-btn');
const editModal = document.querySelector('.edit-class-modal');

editModalBtn.addEventListener('click', () => {
    editModal.classList.add('show');
    editDrawer.classList.add('transparent');
});

closeEditModalBtn.addEventListener('click', () => {
    editDrawer.classList.remove('transparent');
})

// Slide rows
let isDown = false;
let transitionCount = 0;
let mouseTravel;

const studentRows = document.querySelectorAll('.classes__tabs-row ');


studentRows.forEach(row => {
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

            if(mouseTravel < -40) {
                mouseTravel = -100 
                
            } else {
                mouseTravel = 0
            }

            row.style.transform = `translateX(${mouseTravel}px)`;
        }
    });
})

studentRows.forEach(row => {
    row.addEventListener('click',  () => {
        window.location = './classes-detail.html'
    })
})
