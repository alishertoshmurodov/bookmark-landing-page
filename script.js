// tabs

const tabBtnEls = document.querySelectorAll('.tab-btn');
const tabEls = document.querySelectorAll('.features__tab');


tabBtnEls.forEach(element => {
    element.addEventListener('click', function (e) {
        for (let i = 0; i < tabBtnEls.length; i++) {
            tabBtnEls[i].classList.remove('tab-active');
            tabEls[i].classList.add('tab-hidden');
            tabEls[i].classList.remove('tab-current');
        }
        if (!element.classList.contains('tab-active')) {
            element.classList.add('tab-active');
        }
        if (element.dataset.tab == '1') {
            tabEls[0].classList.remove('tab-hidden');
            tabEls[0].classList.add('tab-current');

        } else if (element.dataset.tab == '2') {
            tabEls[1].classList.remove('tab-hidden');
            tabEls[1].classList.add('tab-current');

        } else {
            tabEls[2].classList.remove('tab-hidden');
            tabEls[2].classList.add('tab-current');

        }
    });
    element.addEventListener('mouseover', function (e) {
        if (!element.classList.contains('tab-active')) {
            element.classList.add('tab-hover');
        }
    });
    element.addEventListener('mouseout', function (e) {
        for (let i = 0; i < tabBtnEls.length; i++) {
            tabBtnEls[i].classList.remove('tab-hover');
        }
    });
});


// FAQ section sollapsible


let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.lastChild.lastChild.removeAttribute('class');
            this.lastChild.removeAttribute('style');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.lastChild.lastChild.setAttribute('class', 'active');
            this.lastChild.style = 'transform: rotateX(180deg)';
        }
    });
}


// mobile menu 

const mainMenuEl = document.querySelector('.main-menu');
const mainMenuListEl = document.querySelector('.main-menu__menu');
const burgerEl = document.querySelector('.burger-icon');

burgerEl.addEventListener('click', function (e) {
    if (mainMenuEl.classList.contains('menu-close')) {
        mainMenuEl.classList.remove('menu-close');
        mainMenuListEl.classList.remove('menu-list-hidden');
        burgerEl.style.backgroundImage = 'url(/images/icon-close.svg)';
        document.querySelector('.main-menu__logo path').style = 'fill: #fff';
    } else {
        mainMenuEl.classList.add('menu-close');
        mainMenuListEl.classList.add('menu-list-hidden');
        burgerEl.style.backgroundImage = 'url(/images/icon-hamburger.svg)';
        document.querySelector('.main-menu__logo path').style = 'fill: #242A45';
    }
});


// form

const submitBtnEl = document.querySelector('#submit-btn');
const emailInputEl = document.querySelector('#email-input');
const errMsgEl = document.querySelector('.err-msg');

submitBtnEl.addEventListener('click', function (e) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInputEl.value)) {
        errMsgEl.classList.remove('err-show');
        emailInputEl.removeAttribute('style');
        e.preventDefault();
    } else {
        errMsgEl.textContent = 'Whoops, make sure it’s an email';
        errMsgEl.classList.add('err-show');
        emailInputEl.style = 'border: 2px solid #FA5959;';
        e.preventDefault();
    }
    if (emailInputEl.value === '') {
        errMsgEl.textContent = 'The field is empty';
        errMsgEl.classList.add('err-show');
        emailInputEl.style = 'border: 2px solid #FA5959;';
        e.preventDefault();
    }
});