//Creation of Object
// var housekeeper={
//     yearsOfExperience:12,
//     hName:"Jane",
//     claeningRepertoire:["bathroom,lobby,bedroom"]
//     moveSuitcase:function(){
            //alert("May I take your suitcase?");
//      }
// };

//Constructor Function(Capital name) - Helps in easdy creation of objects
// function BellBoy(name,age,workPermit,languages)
// {
//     this.name=name;
//     this.age=age;
//     this.workPermit=workPermit;
//     this.languages=languages;
//     this.clean=function() //Object method
//     {
//         alert("Cleaning in progress");
//     };
// }

// var BellBoy1=new BellBoy("Timmy",18,"Yes",["Hindi"]);

//Higher Order Functions
//addEventListener is a higher order function  

//respondToKey is a callback function - It helps us wasit for an action and then gets executed
document.addEventListener("keypress",respondToKey);
function respondToKey(event)
{
    console.log("Key pressed");
    console.log(event);
}