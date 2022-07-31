var displayFirst = document.getElementById('firstOne');
var firstInterval = 1000;
var startValue = 0;
var endValue = parseInt(displayFirst.getAttribute("data-val"));
var duration = Math.floor(firstInterval / endValue);

function firstDisplay() {
    var counter = setInterval(function() {
        startValue += 1;
        displayFirst.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
}
console.log(endValue);

var displaySecond = document.getElementById('secondOne');
var secondInterval = 1000;
var startofSecondValue = 0;
var endofSecondValue = parseInt(displaySecond.getAttribute("data-val"));
var durationofSecond = Math.floor(secondInterval / endofSecondValue);

function secondDisplay() {
    var counter = setInterval(function() {
        startofSecondValue += 1;
        displaySecond.textContent = startofSecondValue;
        if (startofSecondValue == endofSecondValue) {
            clearInterval(counter);
        }
    }, durationofSecond);
}
console.log(endofSecondValue);

var displayThird = document.getElementById('thirdOne');
var thirdInterval = 1000;
var startofthirdValue = 0;
var endofthirdValue = parseInt(displayThird.getAttribute("data-val"));
var durationofthird = Math.floor(thirdInterval / endofthirdValue);

function thirdDisplay() {
    var counter = setInterval(function() {
        startofthirdValue += 10;
        displayThird.textContent = startofthirdValue;
        if (startofthirdValue == endofthirdValue) {
            clearInterval(counter);
        }
    }, durationofthird);
}
console.log(endofthirdValue);

var displayFourth = document.getElementById('fourthOne');
var fourthInterval = 1000;
var startoffourthValue = 0;
var endoffourthValue = parseInt(displayFourth.getAttribute("data-val"));
var durationoffourth = Math.floor(fourthInterval / endoffourthValue);

function fourthDisplay() {
    var counter = setInterval(function() {
        startoffourthValue += 7;
        displayFourth.textContent = startoffourthValue;
        if (startoffourthValue == endoffourthValue) {
            clearInterval(counter);
        }
    }, durationoffourth);
}
console.log(endoffourthValue);

function inputElement() {
    document.getElementById("backgroundId").classList.toggle("changeClass");
    document.getElementById("backgroundId2").classList.toggle("changeClass");
    document.getElementById("backgroundId3").classList.toggle("changeClass");
    document.getElementById("backgroundId4").classList.toggle("changeClass");
    document.getElementById("backgroundId5").classList.toggle("changeClass");
    document.getElementById("backgroundId6").classList.toggle("changeClass");
    document.getElementById("backgroundId7").classList.toggle("changeClass");
    document.getElementById("backgroundId8").classList.toggle("changeClass");
    document.getElementById("backgroundId9").classList.toggle("changeClass");
    document.getElementById("backgroundId10").classList.toggle("changeClass");
    document.getElementById("backgroundId11").classList.toggle("changeClass");
    document.getElementById("backgroundId12").classList.toggle("changeClass");
    document.getElementById("body").classList.toggle("classforbody");
    document.getElementById('itsWhite').classList.toggle("itswhite")
}