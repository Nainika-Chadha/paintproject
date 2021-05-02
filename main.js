var mouseEvent="empty";
var lpx,lpy;

canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="darkblue";
width=3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
cpx=e.clientX-canvas.offsetLeft;
cpy=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;


ctx.moveTo(lpx,lpy);
ctx.lineTo(cpx,cpy);
ctx.stroke();
}
lpx=cpx;
lpy=cpy;
}
function clear_canvas() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
