"use strict";
//window.alert('hello');

/*
function add(){
    //window.alert('add');
    //get the two numbers from the “num1” and “num2” input boxes and store in variables
    var n1 = Number(document.getElementById("num1").value);
    //make sure the value was retrieved correctly
    //window.alert(n1);
    var n2 = Number(document.getElementById("num2").value);
    //calculate and store the sum
    var sum = n1 + n2;
    //window.alert(sum);
    //display the result in the “answer” h2 element
 document.getElementById("answer").innerHTML = n1 + " + " + n2 + " = " + sum;
}
*/

function add()
{
//create variables to make it easier to access the two textboxes
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
//make sure both boxes have input
if (hasdata(num1) && hasdata(num2)){
var n1 = Number(num1.value);

 var n2 = Number(num2.value);

 var sum = n1 + n2;
 document.getElementById("answer").innerHTML = n1 + " + " + n2 + " = " + sum;
}
}


function subtract()
{
//create variables to make it easier to access the two textboxes
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
//make sure both boxes have input
if (hasdata(num1) && hasdata(num2)){
var n1 = Number(num1.value);

 var n2 = Number(num2.value);

 var sum = n1 - n2;
 document.getElementById("answer").innerHTML = n1 + " - " + n2 + " = " + sum;
}
}

function multiply()
{
//create variables to make it easier to access the two textboxes
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
//make sure both boxes have input
if (hasdata(num1) && hasdata(num2)){
var n1 = Number(num1.value);

 var n2 = Number(num2.value);

 var sum = n1 * n2;
 document.getElementById("answer").innerHTML = n1 + " * " + n2 + " = " + sum;
}
}

function divide()
{
//create variables to make it easier to access the two textboxes
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
//make sure both boxes have input
if (hasdata(num1) && hasdata(num2)){
var n1 = Number(num1.value);

 var n2 = Number(num2.value);

 var sum = n1 / n2;
 document.getElementById("answer").innerHTML = n1 + " / " + n2 + " = " + sum;
}
}

function reset() {
    //window.alert('reset');
     //clear the elements on the page
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("answer").innerHTML = "";
}

function hasdata(element){
 //make sure there is data in this element
 if (element.value == ""){
 window.alert("missing input");
 return false;
 }
 return true;
}