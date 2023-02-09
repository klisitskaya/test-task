const modalOpen = document.querySelector(".modal_open"),
    modalWindow = document.querySelector(".modal_window"),
    modalClose = document.querySelector(".modal_close");

modalOpen.addEventListener('click', () => {
    modalWindow.showModal()
})

modalClose.addEventListener('click', () => {
    modalWindow.close()
})

modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) modalWindow.close()
})



