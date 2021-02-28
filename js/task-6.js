// Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const validLength = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', inputCheck);
inputRef.addEventListener('focus', removeClass);

function inputCheck(event) {
    event.target.value.length === validLength
        ? event.target.classList.add("valid")
        : event.target.classList.add("invalid");
}

function removeClass(event) {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
  }