//Using . notation we can change the properties and methods of the html element

//getElementsByTagName
// console.log(document.getElementsByTagName("li")[2]);
// document.getElementsByTagName("li")[2].style.color="purple";

//getElementsByClassName
// console.log(document.getElementsByClassName("btn")[0]);
// document.getElementsByClassName("btn")[0].style.color="red";

//getElementById
// console.log(document.getElementById("title"));
// document.getElementById("title").innerHTML="Good Bye";

//document.querySelector
// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#title"));
// console.log(document.querySelector(".btn"));
// console.log(document.querySelector("li a"));//Space for hierarical selector
// console.log(document.querySelector("li.item"));//All in same element thus no space.Previously "a" was a child

//document.querySelectorAll
// console.log(document.querySelectorAll(".list .item"));

//querySelector and querySelectorAll should generally be used

//in JavaScript - is replaced by camel cases Eg. font-size becomes fontSize
// document.querySelector("h1").style.fontSize="12rem";

// document.querySelector(".btn").style.backgroundColor="yellow";

// console.log(document.querySelector("button").classList);
// document.querySelector("button").classList.add("invisible"); //Adding invisible class to button
// document.querySelector("button").classList.remove("invisible");
// document.querySelector("button").classList.toggle("invisible");//Helps toggle class

// document.querySelector("h1").classList.add("huge");

// document.querySelector("h1").textContent="GoodBye";//It is similar to innerHTML.But innerHTML gives us the entire HTML inside the selected element whereas the textContent only gives us the textContent selection
// document.querySelector("h1").innerHTML="<em>GoodBye</em>";

//QUERY SLECTOR FOR ATTRIBUTES
console.log(document.querySelector("a").attributes); //attributes gives the list of attributes
console.log(document.querySelector("a").getAttribute("href"));//getAttribute helps us select a single attribute and get the inner value
document.querySelector("a").setAttribute("href","https://www.bing.com"); //setAttribute(attribute,updatedValue)
