// document.querySelector("button").addEventListener("click",handleClick);//handleClick is not called with paranthesis as we do not want to call it instantly we want to wait for click

// function handleClick()
// {
//     alert("I got clicked");
// }

//Anonymnous function used
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // alert("I got clicked");

        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();

        // console.log(event);
        
        // console.log(this.innerHTML); //this gives us the button that triggered the event
        var buttonInnerHTML=this.innerHTML;
        switch(buttonInnerHTML)
        {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        }

        buttonAnimation(buttonInnerHTML);

    });//what event to listen to,what to do when event occurs
}

//Functions that can take other functions as inputs are called Higher Order Functions
// function add(num1,num2)
// {
//     return num1+num2;
// }
// function multiply(num1,num2)
// {
//     return num1*num2;
// }
// function calculator(num1,num2,operator)
// {
//     return operator(num1,num2);
// }
//Calculator is higher order function

document.addEventListener("keypress",function(event)
{
    switch(event.key)
        {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        }
        buttonAnimation(event.key);

    //console.log(event);
});
//The parameter event helps us to tap into the event that triggered the eventListener

function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");  
    setTimeout(() => {
        activeButton.classList.remove("pressed");   
    }, 100);
    //setTimeout gives delay of 100ms and does the action
}