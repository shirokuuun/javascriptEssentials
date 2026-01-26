let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue() {
    if (count === 10) {
        alert("Congrats your instagram followers reached 10 followers!");
    } else if (count === 20) {
        alert("Congrats your instagram followers reached 20 followers!");
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

