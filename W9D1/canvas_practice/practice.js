document.addEventListener("DOMContentLoaded", function(){
    // i guess this is our canvas element
    const canvasEl = document.getElementById('canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;

    // i guess this is a square
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 500, 500);

    // maybe this is a circle
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

});


   

