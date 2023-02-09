import IMask from 'imask';

const phoneInput = document.querySelector('.phone');

const mask = new IMask(phoneInput, {
    mask: "+{375}(00)000-00-00"
})