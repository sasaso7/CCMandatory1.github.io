window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;
    let color = "#000"
    let width = 5;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPoisition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting){
            return;
        }
        ctx.lineWidth = width;
        ctx.lineCap = "round";

        
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    //Get buttons from html
    const clearButton = document.getElementById("clearButton");
    const colorInput = document.getElementById("colorInput");
    const widthInput = document.getElementById("widthInput");

    //To make sure slider is showing right value
    widthInput.value = width;

    //Adding listeners to them
    clearButton.addEventListener("click", () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
    colorInput.addEventListener("input", ()=>{
        color = colorInput.value;
    })
    widthInput.addEventListener("input", () => {
        width = widthInput.value;
    })

    //Event listeners for listening to the mouse
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPoisition);
    canvas.addEventListener("mousemove", draw);
})