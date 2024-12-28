let btn = document.querySelector("#btn");
let hexColor = document.querySelector("#hexColor")
let color;

let changeColor = () => {
    color = "#";
    let info = "0123456789ABCDEF";
    
    for (let i = 0; i < 6; i++) {
        color = color + info[Math.floor(Math.random() * 16)] 
    }

    return color;
};


let setColor = () => {
    document.body.style.backgroundColor = changeColor();
    hexColor.innerHTML = color;
};
