
$(document).ready(function(){


let today = moment().format("MMMM Do YYYY");
console.log(today);
$("#currentDay").append(today);


let currentTime = parseInt(moment().format("HH"));
console.log(currentTime);

let textNine = $("9AM");
let textTen = $("10AM");
let textEleven = $("11AM");
let textTwelve = $("12PM");
let textOne = $("1PM");
let textTwo = $("2PM");
let textThree = $("3PM");
let textFour = $("4PM");
let textFive = $("5PM");


$("textarea").each(function(){

 let hour = parseInt($(this).attr("name"));
    if (hour < currentTime){
        $(this).addClass("past");
    } 

    if (hour === currentTime){
        $(this).addClass("present");
    } 

    if (hour > currentTime){
        $(this).addClass("future");
    } 





});




















































});