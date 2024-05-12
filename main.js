
let button_start = document.querySelector(".button")
let isbrush = true;
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
    if (isbrush = true)
        {isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);}
    
};

canvas.onmousemove = ({offsetX, offsetY}) => {
    
    if (isbrush = true){if (isDrawing) {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();}
        
    }
};

canvas.onmouseup = () => {
    isDrawing = false;
};
const colorPicker = document.getElementById('colorPicker');

ctx.strokeStyle = colorPicker.value;


colorPicker.addEventListener('change', () => ctx.strokeStyle = colorPicker.value);

document.getElementById('eraserBtn').addEventListener('click', () => {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = lineWidth.value;
    isbrush = false;
})
const lineWidth = document.getElementById('lineWidth');

ctx.lineWidth = lineWidth.value;

lineWidth.addEventListener('change', () => ctx.lineWidth = lineWidth.value);
let brush = document.querySelector(".crush")
brush.addEventListener("click",()=>isbrush = true)