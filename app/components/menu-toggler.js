const menuToggler = (menuTogglerSelector, classActive, menuSelector) => {

    const menuToggler = document.querySelector(menuTogglerSelector);
    const menu = document.querySelector(menuSelector)
    menuToggler.addEventListener('click', () => {
        menuToggler.classList.toggle(classActive)
        menu.classList.toggle('open')
    })
}

export default menuToggler;