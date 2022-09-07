const menu = () => {
    const menuItem = document.querySelectorAll('.menu-item')

function activeMenuItem() {
    menuItem.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active')
    })
}

    menuItem.forEach(item => {
        item.addEventListener('click', activeMenuItem)
    })
}

export default menu;