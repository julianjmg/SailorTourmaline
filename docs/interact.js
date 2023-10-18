window.addEventListener('DOMContentLoaded', init, false);
const buttons = document.getElementsByTagName("button");
let mode = "lightMode"

function init() 
{
    alert ('Hi there! Looks like the page loaded! Yay!');
    buttons[0].addEventListener('click', changeColor, false);
}

function changeColor()
{
    
    if (mode == "lightMode")
    {
        alert("IF LIGHTMODE");
        buttons[0].addEventListener('click', darkMode, false);
        mode = "darkMode";
    }
    
    else if (mode == "darkMode")
    {
        alert("IF DARKMODE");
        buttons[0].addEventListener('click', lightMode, false);
        mode = "lightMode";
    }
    
}

function darkMode()
{
    let darken = document.getElementById("colorToggle");
    {
        alert("IN DARKMODE FUNCTION");
        darken.style.backgroundColor = "black";
        darken.style.color = "white";
        mode = darkMode;
        buttons[0].addEventListener('click', changeColor, false);
    }
}

function lightMode()
{
    let lighten = document.getElementById("colorToggle");
    {
        alert("IN LIGHTMODE FUNCTION");
        lighten.style.backgroundColor = "pink";
        lighten.style.color = "black";
        mode = lightMode;
        buttons[0].addEventListener('click', changeColor, false);
    }
}


























/*function changeColor() 
{
     var colorMe1 = document.getElementById("colorToggle") 
     {
        colorMe1.style.backgroundColor = "black";
        colorMe1.style.color = "white";
     }
}*/


/*function changeColor()
{
    let bool = true;
    if (bool == false)
    {
        var colorMe1 = document.getElementById("colorToggle") 
        {
            colorMe1.style.backgroundColor = "black";
            colorMe1.style.color = "white";
            bool = true;
        }
    }
    else
    {
    buttons[0].addEventListener('click', colorChange, false)
    console.log('Is this ELSE happening?')
    }
}
function colorChange() {
        {
        alert("HEYYYYY");
        console.log("HIIIIIII");
        var colorMe1 = document.getElementById("colorToggle") 
        {
            colorMe1.style.backgroundColor = "pink";
            colorMe1.style.color = "black";
            bool = false;
        }
    }
}
*/

