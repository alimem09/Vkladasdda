function getMousePosition(canvas, event, type) {
    let rect = canvas.getBoundingClientRect();
    if(type=='mousedown'){
        this.downX = event.clientX - rect.left;
        this.downY = event.clientY - rect.top;
        //console.log(downX, downY)
    }
    if(type=='mouseup'){
        this.upX = event.clientX - rect.left;
        this.upY = event.clientY - rect.top;
        //console.log(upX, upY)
    }
    if(type=='mousemove'){
        this.nowX = event.clientX - rect.left;
        this.nowY = event.clientY - rect.top;
        //console.log(nowX, nowY)
        if(isDrawing && !this.isErase){
            saveAction(this.nowX, this.nowY,ctx.lineWidth,ctx.strokeStyle)
        }
    }
}

let canvasElem = document.querySelector("canvas");  
var actionsHistory = [];
function saveAction(nowX,nowY,syze,color) {
    this.actionsHistory.push([nowX,nowY,syze,color]);
}
canvasElem.addEventListener("mousedown", function (e) {
    getMousePosition(canvasElem, e, type='mousedown');
})
canvasElem.addEventListener("mouseup", function (e) {
    getMousePosition(canvasElem, e, type='mouseup');})
canvasElem.addEventListener("mousemove", function (e) {
    getMousePosition(canvasElem, e, type='mousemove');})

let button_start = document.querySelector(".button")
let button_text = document.querySelector(".text")
let button_eraser = document.querySelector(".eraser")
let button_crush = document.querySelector(".crush")
let colorPicker = document.getElementById('colorPicker');
let hz = document.querySelector('.hz')
let isDrawing = false;

button_start.addEventListener("click",()=>{
    let main = document.querySelector(".main-page")
    let start = document.querySelector(".start-page")
    start.style.display = "none"
    main.style.display = "block"
})

hz.addEventListener("click",()=>{
    //console.log(this.actionsHistory)
    for (let i = 0; i < actionsHistory.length; i += 1){
        console.log(this.actionsHistory[i])
        ctx.lineWidth=this.actionsHistory[i][2]
        ctx.fillStyle=this.actionsHistory[i][3]
        ctx.beginPath();
        ctx.arc(actionsHistory[i][0], actionsHistory[i][1], actionsHistory[i][2], 0, 2 * Math.PI); // Указываем координаты x и y на холсте
        ctx.fill();
            }
    console.log(this.cord)
})

button_crush.addEventListener("click",()=>{
    this.isErase = false
    colorPicker = document.getElementById('colorPicker');
    ctx.strokeStyle = colorPicker.value
})

button_text.addEventListener("click",()=>{
    let text = document.querySelector('.texts')
    ctx.font = "30px Arial";
    ctx.fillText(text.value, this.upX, this.upY);
})

button_eraser.addEventListener("click",()=>{
    this.isErase = true
    ctx.strokeStyle = '#ffffff'
})

const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');

canvas.onmousedown = ({offsetX, offsetY}) => {
    {isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);}
    
};

canvas.onmousemove = ({offsetX, offsetY}) => {
    
   if (isDrawing) {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();}
};

canvas.onmouseup = () => {
    isDrawing = false;
};
const lineWidth = document.getElementById('lineWidth');

ctx.lineWidth = lineWidth.value;

lineWidth.addEventListener('change', () => ctx.lineWidth = lineWidth.value);
