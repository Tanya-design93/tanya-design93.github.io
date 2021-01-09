var questions = [
    "1. What is national animal of Canada?", 
    "2. What is the nickname for the Canadian one dollar coin?", 
    "3. What is capital of Canada?",
    "4. What is population of Canada?", 
    "5.  When Justing Trudeau was elected as prime minister?",
    "6. What is national sport of Canada? ",
    "7. The coldest province and teritories in Canada?",
    "8. How many provinces in Canada?",
    "9. What is national meal of Canada?",
    "10. How many offical languages ?"
];

var question1PossibleAnswers = ["Beaver","Moose","Bear", "Goose"];
var question2PossibleAnswers = ["The loonie", "The hoser", "The canuckle", "The swoonie"];
var question3PossibleAnswers = ["Toronto", "Ottawa", "Vancouver", "Calgary"];
var question4PossibleAnswers = ["48.5 million people", "40 million people", "37.6 million people","32 million people"];
var question5PossibleAnswers = ["2015","2010","2013","2017"];
var question6PossibleAnswers = ["Football","Tenis", "Basketball","Hockey"];
var question7PossibleAnswers = ["Yukon", "Alberta", "Manitoba", "New Brunswick"];
var question8PossibleAnswers = ["6", "8", "10", "12"];
var question9PossibleAnswers = ["Poutine", "Pierogi", "Curry", "Borsch"];
var question10PossibleAnswers = ["3", "1", "2", "4"];

var questionPool = [
    question1PossibleAnswers,
    question2PossibleAnswers,
    question3PossibleAnswers,
    question4PossibleAnswers,
    question5PossibleAnswers,
    question6PossibleAnswers,
    question7PossibleAnswers,
    question8PossibleAnswers,
    question9PossibleAnswers,
    question10PossibleAnswers
];

var answers = ["Beaver", "The loonie", "Ottawa", "37.6 million people","2015", "Hockey", "Yukon", "10", "Poutine", "2"];

var rows = []; 

function CreateQuestion(coumnElement,index)
{
    coumnElement.id = Math.random() * 100; 
     var title = document.createElement("label");
     title.textContent = questions[index];
     coumnElement.appendChild(title);
    addBR(coumnElement);
    for(j = 0 ; j < 4; j++){
       coumnElement.appendChild(CreateRadioButton(index,j)); 
       coumnElement.appendChild(CreateRadioButtonLabel(index,j));
       addBR(coumnElement);
        
    }
}

function addQuestionToTable(){
    var table = document.getElementById("questionTable"); 
    
    for(i = 0 ; i < 10; i++)
    {

        var trElement = CreateTableRow();
        trElement.appendChild(CreateColumnElement(i));
        rows.push(trElement);
    }

    for(i = 0; i <rows.length;i++){
        table.appendChild(rows[i]);
    }
    
}

function CreateRadioButton(index,i)
{
        var radioButton = document.createElement("input");
        radioButton.setAttribute('type', 'radio');
        radioButton.setAttribute('name', questions[index]);
        radioButton.setAttribute('value', questionPool[index][i]);
        return radioButton;
}

function CreateRadioButtonLabel(index,i){
    var label = document.createElement("label");
    label.textContent = questionPool[index][i];
    return label;
}

function CreateTableRow(){
    return document.createElement("tr");
}

function CreateColumnElement(index){
    var column = document.createElement("td");
    CreateQuestion(column,index);
    return column;
}

function addBR(element)
{
    element.appendChild(document.createElement("br"));
}

function CheckIfQuestionsAnswered()
{
    
    var unansweredArray = [];
    var answered = false;
    for(i = 0 ; i < questions.length;i++)
    {
        answered = false;
        radioButtonArray = document.getElementsByName(questions[i]);
        for(j = 0;j < radioButtonArray.length;j++)
        {
            
            if(radioButtonArray[j].checked == true){
                answered = true;
            }
        }
    
        if(!answered){
            console.log(questions[i] + "\n");
            unansweredArray.push(questions[i] + "\n");
        }
    }
    if(unansweredArray.length > 0){
        alert("YOU DID NOT ANSWER THE FOLLOWING: \n" +  unansweredArray.join(" "));
   }else{
    VerifyAnsweredQuestions();
   }

}

function VerifyAnsweredQuestions()
{
    var wrongAnswers = [];
    var wrongAnswerBool = false;
    for(i = 0 ; i < questions.length;i++)
    {
        radioButtonArray = document.getElementsByName(questions[i]);
        wrongAnswerBool = false;
        for(j = 0;j < radioButtonArray.length;j++)
        {          
            
            if(radioButtonArray[j].checked == true){
                if(answers[i] != radioButtonArray[j].value && wrongAnswerBool == false)
                {
                    wrongAnswers.push(questions[i] + "\n");
                    wrongAnswerBool = true;
                }
            }
        }
    }
    if(wrongAnswers.length > 0){
        var resultsText =  results(questions.length - wrongAnswers.length);
        alert("YOU DID NOT ANSWER THE FOLLOWING CORRECTLY: \n" + wrongAnswers.join(" ") + "\n" + "Your Score: " + (questions.length - wrongAnswers.length) + "\n" + resultsText);
    }else{
        alert((questions.length - wrongAnswers.length) + results(10));
    }

}

function results(results)
{
 if(results == 10){
    return "Amazing! You are real Canadian or could be!))";
 }
else if(results  < 10 && results >= 7){
    return "Good job! Keep going with your learning!))"; 
}
else if (results <= 6 && results >= 5)
{
    return "Nice try! Go back to study!!))"; 
}
else{
    return "Oh man! This is a bad result! You cant become Canadian!))";  
}
}