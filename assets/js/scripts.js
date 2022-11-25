function showModalWin() {

    let darkLayer = document.createElement('div'); // вставка слоя затемнения 
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    let modalWin = document.getElementById('popupWin'); // находим наше "окно" в index.html
    modalWin.style.display = 'block'; // "включаем" его

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

//замена картинки письма

// let closedEmail = document.querySelector('.iconemail'); // находим картинку в index.html

// document.querySelector('.buttonemail').addEventListener('mouseover', () => {
//     closedEmail.classList.add('.openEmail');
// });
