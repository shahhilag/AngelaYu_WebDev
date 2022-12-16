// document.querySelector("h1"); //------->JavaScript
// $("h1"); //------> JQuery

// $("h1").css("color","red"); //Select h1 and change color to red

// querySelectorAll and querySelector is managed all by replacing $

// console.log($("h1").css("color"));
//1 property inside bracket---->GET
//2 property inside bracket---->SET

// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");
// $("h1").hasClass("big-title");//Boolean value

// $("button").text("Don't click me!"); //innerText----->text
// $("button").html("<em>HTML</em>"); //innerHTML----->html

// console.log($("a").attr("href"));//GET value
// $("a").attr("href","https://www.yahoo.com");//SET value
// console.log($("h1").attr("class"));//Class is also an attribute

//Add EventListener in JavaScript
// $("h1").click(function()
// {
//     $("h1").css("color","purple");
// });


//No need for for loop all button applied
// $("button").click(function()
// {
//     $("h1").css("color","purple");
// })

// $(document).keypress(function(event)
// {
//     // console.log(event.key);
//     $("h1").text(event.key);
// });

//Another way to add eventlisteners
// $("h1").on("mouseover",function()
// {
//     $("h1").css("color","green");
// });

//Add element using jQuery
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>"); //Add element into the HTML just after opening tag
// $("h1").append("<button>New</button>"); //Add element into the HTML just before closing tag

// $("button").remove(); //Delete all buttons

$("button").click(function()
{
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();

    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();

    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();

    // $("h1").animate({opacity:0.5}); //Custom CSS with **numeric value** can be added

    $("h1").slideUp().slideDown().animate({opacity:0.5}) //Nesting Animation
});
