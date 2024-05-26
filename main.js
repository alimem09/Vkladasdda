
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
    
        {isDrawing = true;
        
            
        ctx.moveTo(offsetX, offsetY);
    
};}

canvas.onmousemove = ({offsetX, offsetY}) => {
    
   if (isDrawing) {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();}
        
    
};          

canvas.onmouseup = () => {
    isDrawing = false;
};
const colorPicker = document.getElementById('colorPicker');




colorPicker.addEventListener('change', () => ctx.strokeStyle = colorPicker.value);


const lineWidth = document.getElementById('lineWidth');



lineWidth.addEventListener('change', () => ctx.lineWidth = lineWidth.value);

let save = document.querySelector(".vsibir")
save.addEventListener("click",()=>{
const canvas = document.querySelector("#drawCanvas"); // берём канвас
canvas.toBlob(blob => { //Переводим в блоб
            // Делаем специальную ссылку
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = "canvas.png"
            document.body.appendChild(a);
            // кликаем по ссылке
            a.click();
            //убираем
            window.URL.revokeObjectURL(url);
            a.remove();
        });
})
function getMousePosition(canvas, event, type) {
    let rect = canvas.getBoundingClientRect();
    if(type=='mousedown'){
        this.upX = event.clientX - rect.left;
        this.upY = event.clientY - rect.top;
        
    }
}

function draw_r() {
    
    console.log(upX, upY)
      ctx.beginPath();
      
      ctx.fillRect(upX, upY, lineWidth.value, lineWidth.value);
      ctx.fillStyle = colorPicker.value;
      ctx.fill();
      
  }
  
let square = document.querySelector(".square")
square.addEventListener('click',draw_r) 


