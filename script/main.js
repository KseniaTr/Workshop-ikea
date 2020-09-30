'use strict'; //строгий режим
// всплывающее меню
const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const subcatalog = document.querySelector('.subcatalog');
const subcatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');
//затемнение экрана при открытии меню
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

/* Функции
function openMenu (){  объявление функции
    или const openMenu = function(){};  задаётся переменной
    или const openMenu = () => {} стрелочная функция
};*/

//Открытие меню
const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};
//Закрытие меню
const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu(); //закрытие вместе с сабменю
};
//открытие сабкаталога именно на элементах
const openSubMenu = (event) => {
    event.preventDefault(); //отмена перехода на другую страницу
    //попадание клика на элемент , target это элемент
    const itemList = event.target.closest('.catalog-list__item');
    if (itemList) {
        subcatalogHeader.innerHTML = itemList.textContent;
        subcatalog.classList.add('subopen');
    };
};
const closeSubMenu = () => {
    subcatalog.classList.remove('subopen');
};
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);
