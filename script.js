const rate = document.querySelector("#rate")
const thankYou = document.querySelector("#thank-you")
const form = document.querySelector("#rating-select")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const rating = "input[name=ratings]:checked"
    const selectedNum = document.querySelector(rating)

    if(selectedNum !== null){
        const selectedRating = document.querySelector("#chosen-rating")
        selectedRating.textContent = "You selected " + selectedNum.getAttribute("value") + " out of 5!"
        rate.classList.remove("rate")
        rate.classList.add("hidden")
        thankYou.classList.remove("hidden")
        thankYou.classList.add("thank-you")
    } else {
        alert("Please select a rating, kisses")
    }
})