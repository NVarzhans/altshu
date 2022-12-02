function showModalWin() {

    let darkLayer = document.createElement('div'); // вставка слоя затемнения 
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    let modalWin = document.getElementById('popupWin'); // находим наше "окно" в index.html
    modalWin.style.display = 'block'; // "включаем" его


    let email = document.querySelector(".form"); //сохранение почты, чобы не пришлось дваажды вводить.
    let emailEntered = document.querySelector(".email");
    emailEntered.setAttribute('value', email.value);
   
    // let send = document.querySelector(".submit");
    // send.addEventListener('submit', alert);
 
    // function alert(event) {
    // event.preventDefault();
    // alert("Thanks for your feedback, you are subscribed");
    // } 

    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        return false;
    };
}

// // проверка заполнения формы
// ошибки при вводе по полям:
// имя - 1. не пустое 2.только буквы
// почта - не пустое, содержит @
// телефон - только цифры
// отзыв - если пусто - confirm("are you sure that you do not want to leave a feedback?")
// после нажатия на кнопку Submit - alert("you are subsctibed")

