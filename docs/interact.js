window.addEventListener('DOMContentLoaded', init, false);

function init() 
{
    alert ('Hi there! Looks like the page loaded! Yay!');
    let buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeColor, false)
}

function changeColor() 
{
     var colorMe1 = document.getElementById("colorToggle") 
     {
        colorMe1.style.backgroundColor = "black";
        colorMe1.style.color = "white";
     }
}

/*function changeColor(bool) 
{
    if (bool == false)
    {
        var colorMe1 = document.getElementById("colorToggle") 
        {
            colorMe1.style.backgroundColor = "black";
            colorMe1.style.color = "white";
            bool = true;
        }
    }
    else if (bool == true)
    {
        var colorMe1 = document.getElementById("colorToggle") 
        {
            colorMe1.style.backgroundColor = "pink";
            colorMe1.style.color = "black";
            bool = false;
        }
    }
} */

