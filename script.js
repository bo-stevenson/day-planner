
$(document).ready(function(){

//sets current day in header
let today = moment().format("MMMM Do YYYY");
console.log(today);
$("#currentDay").append(today);


let currentTime = parseInt(moment().format("HH"));
console.log(currentTime);

let textNine = $("#textNine");
let textTen = $("#textTen");
let textEleven = $("#textEleven");
let textTwelve = $("#textTwelve");
let textOne = $("#textOne");
let textTwo = $("#textTwo");
let textThree = $("#textThree");
let textFour = $("#textFour");
let textFive = $("#textFive");

//sets color of text area depending on time of day
$("textarea").each(function(){

 let name = parseInt($(this).attr("name"));
    if (name < currentTime){
        $(this).addClass("past");
    } 

    if (name === currentTime){
        $(this).addClass("present");
    } 

    if (name > currentTime){
        $(this).addClass("future");
    } 

});

//save text to local storage
$("button").on("click", function(){

    localStorage.setItem("textNine", (textNine.val()));
    localStorage.setItem("textTen", (textTen.val()));
    localStorage.setItem("textEleven", (textEleven.val()));
    localStorage.setItem("textTwelve", (textTwelve.val()));
    localStorage.setItem("textOne", (textOne.val()));
    localStorage.setItem("textTwo", (textTwo.val()));
    localStorage.setItem("textThree", (textThree.val()));
    localStorage.setItem("textFour", (textFour.val()));
    localStorage.setItem("textFive", (textFive.val()));


});


//get text back from local storage
$("#textNine").append(localStorage.getItem("textNine"));
$("#textTen").append(localStorage.getItem("textTen"));
$("#textEleven").append(localStorage.getItem("textEleven"));
$("#textTwelve").append(localStorage.getItem("textTwelve"));
$("#textOne").append(localStorage.getItem("textOne"));
$("#textTwo").append(localStorage.getItem("textTwo"));
$("#textThree").append(localStorage.getItem("textThree"));
$("#textFour").append(localStorage.getItem("textFour"));
$("#textFive").append(localStorage.getItem("textFive"));










});