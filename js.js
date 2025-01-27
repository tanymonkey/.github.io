/* Объявление переменной, нашли кнопку по тегу */
var emailButton = document.querySelector("#email-button");

/* Тут на кнопку навешиваем обработчик, который ждет клика от того */
emailButton.addEventListener("click", function () {
  alert("Have a nice day!");
});
