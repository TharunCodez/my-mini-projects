
const count = document.getElementById("count");
const container = document.getElementById("container");
const mainBody = document.getElementById("mainBody");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
let num = 0;

function changeBgColor(color) {

    mainBody.style.backgroundColor = color;
    setTimeout(() => {
        mainBody.style.backgroundColor = "black";
    }, 200);
}

function changeColor(color, btnID) {

    count.style.color = color;
    setTimeout(() => {
        count.style.color = "white";
    }, 250);

    btnID.style.color = color;
    setTimeout(() => {
        btnID.style.color = "black";
    }, 250);
}

function increaseFunc() {

    num++;
    count.textContent = num;
    changeBgColor("hsl(120, 100%, 66%)");
    changeColor("hsl(120, 100%, 66%)",increaseBtn);
}

function resetFunc() {

    num = 0;
    count.textContent = num;
    changeBgColor("hsl(239, 97%, 63%)");
    changeColor("hsl(239, 97%, 63%)",resetBtn);
}

function decreaseFunc() {

    num--;
    count.textContent = num;
    changeBgColor("hsl(0, 100%, 59%)");
    changeColor("hsl(0, 100%, 59%)",decreaseBtn);
}

increaseBtn.addEventListener("click", increaseFunc);
resetBtn.addEventListener("click", resetFunc);
decreaseBtn.addEventListener("click", decreaseFunc);
