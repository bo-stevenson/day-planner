
$(document).ready(function(){


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




















































});