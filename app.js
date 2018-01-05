
var form = document.querySelector("#guess")
var input = document.querySelector('input')
var response = document.querySelector('.response')
var correctAnswer = Math.ceil(Math.random() * 10)
var guessList = []
var guesses = document.querySelector('.guesses');

console.log(correctAnswer);

form.addEventListener("submit", guess)

function guess(e) {
  e.preventDefault()
  var theirAnswer = input.value

  guessList.push(theirAnswer)

  if (theirAnswer == correctAnswer) {
    setInterval(changeColor, 200)
    response.innerHTML = "Yay, You did it!"
  }
  else if (theirAnswer > correctAnswer) {
    response.innerHTML = "Too Big!"
  }
  else if (theirAnswer < correctAnswer) {
    response.innerHTML = "Too Small"
  }
  else {
    guessList.pop()
    response.innerHTML = "Invalid Response"
  }

  guesses.innerHTML = guessList
}

function changeColor() {
  var red = Math.floor(Math.random() * 255)
  var green = Math.floor(Math.random() * 255)
  var blue = Math.floor(Math.random() * 255)

  document.body.style.background = `rgb(${red}, ${blue}, ${green})`
}
