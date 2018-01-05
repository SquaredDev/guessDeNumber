
var form = document.querySelector("#guess");
var input = document.querySelector('input');
var response = document.querySelector('.response');
var correctAnswer = Math.ceil(Math.random() * 10)

console.log(correctAnswer);

form.addEventListener("submit", guess)

function guess(e) {
  e.preventDefault()
  var theirAnswer = input.value

  if (theirAnswer == correctAnswer) {
    response.innerHTML = "Yay, You did it!"
  }
  else if (theirAnswer > correctAnswer) {
    response.innerHTML = "Too Big!"
  }
  else if (theirAnswer < correctAnswer) {
    response.innerHTML = "Too Small"
  }
  else {
    response.innerHTML = "Invalid Response"
  }
}
