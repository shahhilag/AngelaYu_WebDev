prompt("What is your name?");
prompt("What is your friend's name?");

var love=Math.random()*100;
love=Math.floor(love)+1;//0 excluded
if(love===100)
{
    alert("You love each other "+ love +"%");
}
else console.log(love);

//Comparators - ===,!==,>,<,>=,<=
//Combining comparators - &&,||,!