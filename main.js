
let button_start = document.querySelector(".button")

button_start.addEventListener("click",()=>{
    let main = document.querySelector(".main-page")
    let start = document.querySelector(".start-page")
    start.style.display = "none"
    main.style.display = "block"
    
}
)
const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.onmousedown = ({offsetX, offsetY}) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
};

canvas.onmousemove = ({offsetX, offsetY}) => {
    if (isDrawing) {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    }
};

canvas.onmouseup = () => {
    isDrawing = false;
};