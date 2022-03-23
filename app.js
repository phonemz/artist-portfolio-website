const toggle = document.querySelector('.toggle')
const slideDown = document.querySelector('.slide-down')

toggle.addEventListener('click', () => {
    console.log("Hello")
    slideDown.classList.toggle('showup')
})