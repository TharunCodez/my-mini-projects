
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "🤕";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "🤨";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "aqua";
    event.target.textContent = "😀";
});

document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){
        myBox.textContent = "😱";
        myBox.style.backgroundColor = "tomato";
    }
});

document.addEventListener("keyup", event => {
    myBox.style.backgroundColor = "aqua";
    myBox.textContent = "😀";
});

document.addEventListener("keydown", event => {

    event.preventDefault();

    if(event.key.startsWith("Arrow")){

        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
    else{
        myBox.textContent = event.key;
        setTimeout(() => {
            myBox.textContent = "😀";
        }, 400);
    }
})