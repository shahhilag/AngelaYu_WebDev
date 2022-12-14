// console.log("Hilag" + " "+ "Shah"); //String concatenation

// var myName="Hilag";
// console.log(myName.length);

// var tweet= prompt("Compose your tweet:");
// // var tweetCount= tweet.length;
// // alert("You have written " + tweetCount + " characters,you have "+(140-tweetCount) +" characters remaining.");
// console.log(tweet.slice(0,140));

// var myName="Hilag";
// console.log(myName.slice(0,1)); //(include,exclude) ----> [0,1)

// var myName="Hilag";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

var myName=prompt("Please enter your name");
var nameLength=myName.length;
console.log("Hello "+ myName.slice(0,1).toUpperCase() + myName.slice(1,nameLength).toLowerCase());