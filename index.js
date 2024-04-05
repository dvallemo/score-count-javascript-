let homeScoreCount = document.getElementById("home-score-count")
let guestScoreCount = document.getElementById("guest-score-count")
let count = 0
let countGuest = 0


function increaseByOne() {
    console.log("clicked")
    count += 1
    console.log(count)
    homeScoreCount.textContent = count
}


function increaseByTwo() {
    console.log("clicked")
    count += 2
    console.log(count)
    homeScoreCount.textContent = count
}

function increaseByThree() {
    console.log("clicked")
    count += 3
    console.log(count)
    homeScoreCount.textContent = count
}


function increaseByOneGuest() {
    console.log("clicked")
    countGuest += 1
    console.log(countGuest)
    guestScoreCount.textContent = countGuest
}


function increaseByTwoGuest() {
    console.log("clicked")
    countGuest += 2
    console.log(countGuest)
    guestScoreCount.textContent = countGuest
}

function increaseByThreeGuest() {
    console.log("clicked")
    countGuest += 3
    console.log(countGuest)
    guestScoreCount.textContent = countGuest
}