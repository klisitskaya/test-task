// const form = document.forms["form"];
const form = document.querySelector("#form")

form.addEventListener("input", inputHandler);

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }
  
function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    
    if (reg.test(inputValue)) {
        el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
        el.style.border = "2px solid rgb(255, 0, 0)";
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts';

const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: data,
  })
  return await response.json();
}

const sendForm = () => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      sendData(url, formData)
        .then(() => {
          alert('Ваши данные успешно отправлены')
          form.reset();
        })
        .catch((err) => {
          alert('Произошла ошибка отправки данных')
        })
    })
}
sendForm();




  
 