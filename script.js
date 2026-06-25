let btn = document.querySelector("button");

btn.addEventListener("click",function (){
    let div = document.querySelector(".container");
    let randomColor = generateRandomColor();
    div.style.backgroundColor = randomColor;
    let head = document.querySelector("h1");
    head.innerText=randomColor;
     
});

function generateRandomColor (){
     let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;  
    return color;
}