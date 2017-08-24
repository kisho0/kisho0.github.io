// Отваря друга страница 
// function doSomething(){
//       alert('this one works too!'); 
//       window.location.href = "quizResults.html";
//     }

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
var question1 = "";
var question2 = "";
var question3;
var question4;
var question5;
var userScore;
var userCharacter = "";
var imageAnswer;

    function nextQuestion1() {
    
    document.getElementById("questionsBlock2").style.animation = "slideInLeft 2s";
    document.getElementById("questionsBlock1").style.animation = "slideOutRight 2s";    
    document.getElementById("questionsBlock2").style.visibility='visible';
    document.getElementById("questionsBlock1").style.visibility='hidden';
    // 
    // 
    // document.getElementById("questionsBlock2").style.visibility='visible';
    }
    function nextQuestion2() {
    document.getElementById("questionsBlock3").style.animation = "slideInLeft 2s";
    document.getElementById("questionsBlock2").style.animation = "slideOutRight 2s";    
    document.getElementById("questionsBlock3").style.visibility='visible';
    document.getElementById("questionsBlock2").style.visibility='hidden';
//     
//     document.getElementById("questionsBlock3").style.visibility='visible';
    }   
   function nextQuestion3() {
    document.getElementById("questionsBlock4").style.animation = "slideInLeft 2s";
    document.getElementById("questionsBlock3").style.animation = "slideOutRight 2s";    
    document.getElementById("questionsBlock4").style.visibility='visible';
    document.getElementById("questionsBlock3").style.visibility='hidden';
//     
//     document.getElementById("questionsBlock4").style.visibility='visible';
   }
   function nextQuestion4() {
    document.getElementById("questionsBlock5").style.animation = "slideInLeft 2s";
    document.getElementById("questionsBlock4").style.animation = "slideOutRight 2s";    
    document.getElementById("questionsBlock5").style.visibility='visible';
    document.getElementById("questionsBlock4").style.visibility='hidden';
//     
//     document.getElementById("questionsBlock5").style.visibility='visible';
//     document.getElementById("resultsButton").style.visibility='visible';
   }

function userResults() {
    // document.getElementById("overLay").style.display = "block";
    // запазване на отговорите на потребителя в променлива userScore
    userScore = " ";
    // запазване на стойността на радио бутона в променлива question1,2,3,4,5
    question1 = document.querySelector('input[name="question1"]:checked').value
    question2 = document.querySelector('input[name="question2"]:checked').value
    // question3 = document.querySelector('input[name="question3"]:checked').value
    // question4 = document.querySelector('input[name="question4"]:checked').value
    // question5 = document.querySelector('input[name="question5"]:checked').value
  
    // складиране на всички отгорови в променливата
    userScore = question1 + question2;
    console.log(userScore);
    // въпроси за а
    if (userScore === "af") {
        userCharacter = "Sansa Stark";
        imageAnswer = ('img/sansa.jpg');
    }
   if (userScore === "ag") {
        userCharacter = "Missandei"
        imageAnswer = ('img/missandei.jpg');
    }
    if (userScore === "ah") {
        userCharacter = "Samwell Tarly"
        imageAnswer = ('img/Samwell.jpg');
    }
    if (userScore === "ai") {
        userCharacter = "Brienne of Tarth"
        imageAnswer = ('img/Brienne.jpg');
    }
    // въпроси за b
    if (userScore === "bf") {
        userCharacter = "Arya Stark"
        imageAnswer = ('img/Arya.jpg');
    }
    if (userScore === "bg") {
        userCharacter = "Lord Varys"
        imageAnswer = ('img/Varys.jpg');
    }
    if (userScore === "bh") {
        userCharacter = "Bran Stark"
        imageAnswer = ('img/Bran.jpg'); 
    }
    if (userScore === "bi") {
        userCharacter = "Jon Snow"
        imageAnswer = ('img/Jon.jpeg'); 
    }
    // въпроси за с
    if (userScore === "cf") {
        userCharacter = "Bronn"
        imageAnswer = ('img/Bronn.jpeg'); 
    }
    if (userScore === "cg") {
        userCharacter = "Tyrion Lannister"
        imageAnswer = ('img/Tyrion.jpg'); 
    }
    if (userScore === "ch") {
        userCharacter = "Jaime Lannister" 
        imageAnswer = ('img/Jaime.jpg');
    }
    if (userScore === "ci") {
        userCharacter = "Daenerys Targaryen"
        imageAnswer = ('img/Daenerys.jpeg');
    }
    // въпроси за d
    if (userScore === "df") {
        userCharacter = "Tormund Giantsbane"
        imageAnswer = ('img/Tormund.jpg');
    }
    if (userScore === "dg") {
        userCharacter = "Cersei Lannister"
        imageAnswer = ('img/Cersei.jpg');
    }
    if (userScore ==="dh") {
        userCharacter = "Petyr Baelish"
        imageAnswer = ('img/Petyr Baelish.jpg');
    }
    if (userScore === "di") {
        userCharacter = "The Night King"
        imageAnswer = ('img/The Night King.jpg');
    }
    
    // Показва резултатите
    document.getElementById("resultsBlock").style.animation = "slideInLeft 2s";
    document.getElementById("questionsBlock5").style.animation = "slideOutRight 2s";    
    document.getElementById("resultsBlock").style.visibility='visible';
    document.getElementById("questionsBlock5").style.visibility='hidden';
    

    document.getElementById("imageField").src = imageAnswer;      
    document.getElementById("resultsField").style.visibility='visible';
    document.getElementById("resultsField").innerHTML += 'You are ' + userCharacter;
    document.getElementById("resultsButton").style.visibility='hidden';
    document.getElementById("clearButton").style.visibility='visible';
        
}
function clearResults() {
    location.reload();
     $(document).ready(function(){
    $(window).scrollTop(0);
});
}
// function off() {
//     document.getElementById("overLay").style.display = "none";
// }

  


