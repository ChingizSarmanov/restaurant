let burger = document.querySelector('.burger')
let menu = document.querySelector('.burger-slide')

burger.addEventListener('click',()=>{
    menu.classList.toggle('disp');
});