/* Объявление переменной, нашли кнопку по тегу */
var button = document.querySelector(button);

/* Тут на кнопку навешиваем обработчик, который ждет клика от того */
button.addEventListener("click", function () {
  alert("Have a nice day!");
});
