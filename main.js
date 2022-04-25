var main = document.querySelector('#name');
var temp = document.querySelector('.temp'); //creating variables that come from html doc
var desc = document.querySelector('.desc');
var icons = document.querySelector('.icons');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=9875cc8556b5f492196227202c352a59&units=metric') //telling code to use openweathermap as a source
.then(response => response.json()) //stores data in json
.then(data => { //tells program to use the data to do the following
var tempValue = data['main']['temp']; //creates variables using the changing information from the link
var descValue = data['weather'][0]['description'];
var iconsValue = data['weather'][0]['icon'];

icons.innerHTML = "<img src='http://openweathermap.org/img/wn/" + iconsValue + "@4x.png'>"; //changes the info in the classes to have the new info written here
temp.innerHTML = "Temperature: " + tempValue + "C";
desc.innerHTML = "Description: " + descValue;
});