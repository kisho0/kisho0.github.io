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
var userScore;
var userCharacter = "";
function userResults() {
    userScore = 0;
    // запазване на стойността на радио бутона в променлива question1,2,3,4,5
    question1 = document.querySelector('input[name="question1"]:checked').value
    question2 = document.querySelector('input[name="question2"]:checked').value
    question3 = document.querySelector('input[name="question3"]:checked').value
    question4 = document.querySelector('input[name="question4"]:checked').value
    question5 = document.querySelector('input[name="question5"]:checked').value
    if (question1 === "answer1") {
        userScore = userScore + 1;
    }
    if (question1 === "answer2") {
        userScore = userScore + 2;
    }
    if (question1 === "answer3") {
        userScore = userScore + 3;
    }
    if (question1 === "answer4") {
        userScore = userScore + 4;
    }
    // question 2
    if (question2 === "answer1") {
        userScore = userScore + 1;
    }
    if (question2 === "answer2") {
        userScore = userScore + 2;
    }
    if (question2 === "answer3") {
        userScore = userScore + 3;
    }
    if (question2 === "answer4") {
        userScore = userScore + 4;
    }
    // question 3
    if (question3 === "answer1") {
        userScore = userScore + 1;
    }
    if (question3 === "answer2") {
        userScore = userScore + 2;
    }
    if (question3 === "answer3") {
        userScore = userScore + 3;
    }
    if (question3 === "answer4") {
        userScore = userScore + 4;
    }
    // question 4
    if (question4 === "answer1") {
        userScore = userScore + 1;
    }
    if (question4 === "answer2") {
        userScore = userScore + 2;
    }
    if (question4 === "answer3") {
        userScore = userScore + 3;
    }
    if (question4 === "answer4") {
        userScore = userScore + 4;
    }
    // question 5
    if (question5 === "answer1") {
        userScore = userScore + 1;
    }
    if (question5 === "answer2") {
        userScore = userScore + 2;
    }
    if (question5 === "answer3") {
        userScore = userScore + 3;
    }
    if (question5 === "answer4") {
        userScore = userScore + 4;
    }
    console.log(userScore);
    if (userScore == 5) {
        userCharacter = 'Samwell Tarly'
        console.log('Samwell Tarly')
    }
    if (userScore === 6) {
        userCharacter = 'Brienne of Tarth'
        console.log('Brienne of Tarth')
    }
    if (userScore === 7) {
        console.log('Bran Stark')
        userCharacter = 'Bran Stark';
    }
    if (userScore === 8) {
        console.log('Lord Varys')
        userCharacter = 'Lord Varys';
    }
    if (userScore === 9) {
        console.log('Bronn')
        userCharacter = 'Bronn';
    }
    if (userScore === 10) {
        console.log('Sansa Stark')
        userCharacter = 'Sansa Stark';
    }
    if (userScore === 11) {
        console.log('Cersei Lanniseter')
        userCharacter = 'Cersei Lannister';
    }
    if (userScore === 12) {
        console.log('Jon Snow')
        userCharacter = 'Jon Snow';
    }
    if (userScore === 13) {
        console.log('Tyrion Lannister')
        userCharacter = 'Tyrion Lannister';
    }
    if (userScore === 14) {
        console.log('Peter Baelish')
        userCharacter = 'Peter Baelish';
    }
    if (userScore === 15) {
        console.log('Jamie Lannister')
        userCharacter = 'Jamie Lannister';
    }
    if (userScore === 16) {
        console.log('Daenerys Targaryen')
        userCharacter = 'Daenerys Targaryen';
    }
    if (userScore === 17) {
        console.log('Arya Stark')
        userCharacter = 'Arya Stark';
    }
    if (userScore === 18) {
        console.log('Tormund Giantsbane')
        userCharacter = 'Tormund Giantsbane';
    }
    if (userScore === 19) {
        console.log('Missandei')
        userCharacter = 'Missandei';
    }
    if (userScore === 20) {
        console.log('Davos Seaworth')
        userCharacter = 'Davos Seaworth';
    }
    document.getElementById("resultsField").style.visibility='visible';
    document.getElementById("resultsField").innerHTML += 'You are ' + userCharacter;
    document.getElementById("resultsButton").style.visibility='hidden';
    document.getElementById("resultsButton1").style.visibility='visible';    
}
function clearResults() {
    userScore = 0;
    userCharacter = " ";
    document.getElementById("resultsField").innerHTML = " ";
    document.getElementById("resultsField").style.visibility='hidden';
    document.getElementById("resultsButton").style.visibility='visible';
    document.getElementById("resultsButton1").style.visibility='hidden';
     $(document).ready(function(){
    $(window).scrollTop(0);
});
}
     


