// Отваря друга страница 
// function doSomething(){
//       alert('this one works too!'); 
//       window.location.href = "quizResults.html";
//     }

var question1;
var question2;
var question3;
var question4;
var question5;
    // Проверка дали има неотговорен отговор

function userResults() {
    // запазване на стойността на радио бутона в променлива question1,2,3,4,5
    question1 = document.querySelector('input[name="question1"]:checked').value
    question2 = document.querySelector('input[name="question2"]:checked').value
    question3 = document.querySelector('input[name="question3"]:checked').value
    question4 = document.querySelector('input[name="question4"]:checked').value
    question5 = document.querySelector('input[name="question5"]:checked').value
        console.log(question1);
        console.log(question2);
        console.log(question3);
        console.log(question4);
        console.log(question5);           
}
     


