const numbers = [1, 2, 3, 4, 5]

let rateNums = document.querySelector('#nums')

numbers.forEach((number) => {
    rateNums.innerHTML += makeNumbersDisplay(number)
})

function makeNumbersDisplay(number) {
    return '<div class="numberButton">' + number + '</div>'
}