const page = document.getElementById("body");
const display = document.getElementById("display");
const button = document.getElementById("button");

const color = ["red", "blue", "green","yellow","pink","black","white","orange","darkblue"];

button.addEventListener('click', function()
{
    var n = color.length;
    const randomcolor = Math.floor(Math.random() * n);
    body.style.backgroundColor = color[randomcolor];
    const colorval = color[randomcolor];
    if(color[randomcolor] == "black")
    {
        display.style.color = "white";
    }
    display.innerHTML = "Color is : " + colorval;
} );