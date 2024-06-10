document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button')
    const menu = document.getElementById('menu')
    const lettersLink = document.getElementById('letters-link')
    const numbersLink = document.getElementById('numbers-link')
    const lettersContent = document.getElementById('letters-content')
    const numbersContent = document.getElementById('numbers-content')

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden')
    })

    lettersLink.addEventListener('click', (event) => {
        event.preventDefault()
        lettersContent.classList.remove('hidden')
        numbersContent.classList.add('hidden')
        menu.classList.add('hidden')
    })

    numbersLink.addEventListener('click', (event) => {
        event.preventDefault();
        numbersContent.classList.remove('hidden')
        lettersContent.classList.add('hidden')
        menu.classList.add('hidden')
    })
})