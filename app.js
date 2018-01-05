
var form = document.querySelector("#guess");
var input = document.querySelector('input');
var response = document.querySelector('.response');
var correctAnswer = Math.ceil(Math.random() * 10)

console.log(correctAnswer);

form.addEventListener("submit", guess)

function guess(e) {
  e.preventDefault()
  console.log('Hi Class');
}
