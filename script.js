// //using an array and foreach to produce numbers for the rating in function
// const numbers = [1, 2, 3, 4, 5]

// let rateNums = document.querySelector('#nums')

// numbers.forEach((number) => {
//     rateNums.innerHTML += makeNumbersDisplay(number)
// })

// function makeNumbersDisplay(number) {
//     return '<div class="numberButton">' + number + '</div>'
// }

//on click update variable with textcontent of the div
let rating = null
let one = document.querySelector("#one")
one.addEventListener('click', () => {rating = 1;})
let two = document.querySelector("#two")
two.addEventListener('click', () => {rating = 2;})
let three = document.querySelector("#three")
three.addEventListener('click', () => {rating = 3;})
let four = document.querySelector("#four")
four.addEventListener('click', () => {rating = 4;})
let five = document.querySelector("#five")
five.addEventListener('click', () => {rating = 5;})



//on click of submit button hide rating screen and show thank you screen
let submitButton = document.querySelector('#submit')
let rateHide = document.querySelector('#rate')
let thanksDisplay = document.querySelector('#thank-you')
let chosenRating = document.querySelector('#chosen-rating')

submitButton.addEventListener('click', () => {
    rateHide.classList.remove('rate')
	rateHide.classList.add('hidden')
    thanksDisplay.classList.remove('hidden')
    thanksDisplay.classList.add('thank-you')
    chosenRating.textContent += showratingSelected(rating)
    console.log(rating)
})

 function showratingSelected(rating) {
     return 'You selected ' + rating + ' out of 5'
}