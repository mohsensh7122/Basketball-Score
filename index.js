let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");
let homeScore = 0;
let guestScore = 0;

function addOneHome() {
    homeScore++;
    scoreHomeEl.textContent = homeScore;
}

function addTwoHome() {
    homeScore += 2;
    scoreHomeEl.textContent = homeScore;
}

function addThreeHome() {
    homeScore += 3;
    scoreHomeEl.textContent = homeScore;
}

function addOneGuest() {
    guestScore++;
    scoreGuestEl.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
    scoreGuestEl.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
    scoreGuestEl.textContent = guestScore;
}

function resetScore() {
    homeScore = 0;
    scoreHomeEl.textContent = homeScore;
    guestScore = 0
    scoreGuestEl.textContent = guestScore;
}