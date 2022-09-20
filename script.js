const numbers = [1, 2, 3, 4, 5]

let rateNums = document.querySelector('#nums')

numbers.forEach((number) => {
    rateNums.innerHTML += makeNumbersDisplay(number)
})

function makeNumbersDisplay(number) {
    return '<div class="numberButton">' + number + '</div>'
}


let submitButton = document.querySelector('#submit')
let rateHide = document.querySelector('#rate')
let thanksDisplay = document.querySelector('#thank-you')
submitButton.addEventListener('click', () => {
    rateHide.classList.remove('rate')
	rateHide.classList.add('hidden')
    thanksDisplay.classList.remove('hidden')
    thanksDisplay.classList.add('thank-you')
})
