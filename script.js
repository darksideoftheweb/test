const startWindow = document.querySelector('.game__start')
const startBtn = document.querySelector('.game__start-button')

const levelChoiceWindow = document.querySelector('.game__level')
const gameLevelChoice = document.querySelector('.one')

const gameBody = document.querySelector('.game__body')
let attempts = document.querySelector('.attempts')

const roundOne = document.querySelector('.round__one')
const roundTwo = document.querySelector('.round__two')
const roundThree = document.querySelector('.round__three')
const roundFour = document.querySelector('.round__four')

const userChoice = document.querySelector('.input__button')
const input = document.querySelector('.input')
const help = document.querySelector('.game__input-help')
const toFew = document.querySelector('.to__few')
const toMuch = document.querySelector('.to__much')
// console.log(help.textContent)

const newGame = document.querySelector('.game__new')
const nextGame = document.querySelector('.next__game')
const exit = document.querySelector('.exit')
const girls = document.querySelector('.girls')
const lostGame = document.querySelector('.game__new-title')
let girl = 2

let secret = Math.trunc(Math.random() * 20 + 1)
console.log(secret)

startBtn.addEventListener('click', function () {
  startWindow.style.display = 'none'
  levelChoiceWindow.style.display = 'flex'
  girl = 2

})

gameLevelChoice.addEventListener('click', function () {
  levelChoiceWindow.style.display = 'none'
  gameBody.style.display = 'block'
  attempts.textContent = 10
})

userChoice.addEventListener('click', function () {
  let userNumber = input.value
  console.log(input.value)
  if (userNumber == secret) {

    console.log('hi')
    gameBody.style.display = 'none'
    newGame.style.display = 'block'
    girls.style.backgroundImage = `url(img/${girl}.jpg)`
    girl++

  } else if (userNumber < secret) {

    if (attempts.textContent < 2) {
      console.log('hi')
      newGame.style.display = 'block'
      gameBody.style.display = 'none'
      lostGame.textContent = 'you loss'
      lostGame.style.color = 'red'
      nextGame.style.display = 'none'
    }

    attempts.textContent -= 1
    toFew.style.backgroundColor = 'green'
    toMuch.style.backgroundColor = 'gray'



  } else if (userNumber > secret) {
    attempts.textContent -= 1
    toFew.style.backgroundColor = 'gray'
    toMuch.style.backgroundColor = 'green'

    if (attempts.textContent < 2) {
      newGame.style.display = 'block'
      gameBody.style.display = 'none'
      lostGame.textContent = 'you loss'
      lostGame.style.color = 'red'
      nextGame.style.display = 'none'
    }
  }
})

nextGame.addEventListener('click', function () {
  newGame.style.display = 'none'
  gameBody.style.display = 'block'
  secret = Math.trunc(Math.random() * 20 + 1)
  console.log(secret)
  input.value = ''

  if (girl == 6) {
    nextGame.style.display = 'none'
    girl = 1
    girls.style.backgroundImage = `url(img/${girl}.jpg)`
    // roundFour.classList.add('completed')
    nextGame.style.display = 'none'
  } else if (girl == 3) {
    roundOne.classList.add('completed')
    roundTwo.classList.add('active')
  } else if (girl == 4) {
    roundTwo.classList.add('completed')
    roundThree.classList.add('active')
  } else if (girl == 5) {
    roundThree.classList.add('completed')
    roundFour.classList.add('active')
  }
})

exit.addEventListener('click', function () {
  // startWindow.style.display = 'flex'
  // levelChoiceWindow.style.display = 'none'
  // gameBody.style.display = 'none'
  // newGame.style.display = 'none'
  // roundOne.classList.remove('completed')
  // roundTwo.classList.remove('active')
  // roundTwo.classList.remove('completed')
  // roundThree.classList.remove('active')
  // roundThree.classList.remove('completed')
  // roundFour.classList.remove('active')
  // roundFour.classList.remove('completed')
  // girl = 1
  // girls.style.backgroundImage = `url(img/${girl}.jpg)`
  // input.value = ''
  // secret = Math.trunc(Math.random() * 20 + 1)
  // console.log(secret)
  // lostGame.textContent = 'you win'
  // lostGame.style.color = 'green'
  location.reload()
})

