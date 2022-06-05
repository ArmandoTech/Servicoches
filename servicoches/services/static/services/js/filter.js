function perro() {
    reset()
    const fries = document.querySelectorAll('.fries');
    const burger = document.querySelectorAll('.burger');
    const perrosList = document.querySelector('.perros-list');
    const friesList = document.querySelector('.fries-list')
    const allList = document.querySelector('.all-list')
    const burgerList = document.querySelector('.burger-list')

    perrosList.classList.add('active');
    friesList.classList.remove('active');
    burgerList.classList.remove('active');
    allList.classList.remove('active');
    fries.forEach(div => {
        div.setAttribute('style', 'display:none');
    })
    burger.forEach(div => {
        div.setAttribute('style', 'display:none');
    })
    
}

function todos() {
    const perros = document.querySelectorAll('.perros');
    const fries = document.querySelectorAll('.fries');
    const burger = document.querySelectorAll('.burger');
    const perrosList = document.querySelector('.perros-list');
    const friesList = document.querySelector('.fries-list')
    const allList = document.querySelector('.all-list')
    const burgerList = document.querySelector('.burger-list')

    allList.classList.add('active');
    friesList.classList.remove('active');
    burgerList.classList.remove('active');
    perrosList.classList.remove('active');
    fries.forEach(div => {
        div.setAttribute('style', 'display:block');
    })
    burger.forEach(div => {
        div.setAttribute('style', 'display:block');
    })
    perros.forEach(div => {
        div.setAttribute('style', 'display:block');
    })
    
}

function burger() {
    reset()
    const fries = document.querySelectorAll('.fries');
    const perros = document.querySelectorAll('.perros');
    const perrosList = document.querySelector('.perros-list');
    const friesList = document.querySelector('.fries-list')
    const allList = document.querySelector('.all-list')
    const burgerList = document.querySelector('.burger-list')

    burgerList.classList.add('active');
    friesList.classList.remove('active');
    perrosList.classList.remove('active');
    allList.classList.remove('active');
    fries.forEach(div => {
        div.setAttribute('style', 'display:none');
    })
    perros.forEach(div => {
        div.setAttribute('style', 'display:none');
    })
}

function fries() {
    reset()
    const perros = document.querySelectorAll('.perros');
    const burger = document.querySelectorAll('.burger');
    const perrosList = document.querySelector('.perros-list');
    const friesList = document.querySelector('.fries-list')
    const allList = document.querySelector('.all-list')
    const burgerList = document.querySelector('.burger-list')

    friesList.classList.add('active');
    perrosList.classList.remove('active');
    burgerList.classList.remove('active');
    allList.classList.remove('active');
    perros.forEach(div => {
        div.setAttribute('style', 'display:none');
    })
    burger.forEach(div => {
        div.setAttribute('style', 'display:none');
    })
    
}

function reset(){
    const perros = document.querySelectorAll('.perros');
    const fries = document.querySelectorAll('.fries');
    const burger = document.querySelectorAll('.burger');
    fries.forEach(div => {
        div.setAttribute('style', 'display:block');
    })
    burger.forEach(div => {
        div.setAttribute('style', 'display:block');
    })
    perros.forEach(div => {
        div.setAttribute('style', 'display:block');
    })
}