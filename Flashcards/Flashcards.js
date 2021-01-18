
function CreateButton(buttonText,parent){

    let button = document.createElement("button");
    button.textContent = buttonText;
    button.classList.add("button");
    
    if(buttonText == "Delete")
    {
        button.id = "Delete";
        button.onclick = function() 
        {
            DeleteFlashCard(parent.parentNode.parentNode);
        };
    }
    if(buttonText == "Edit")
    {
        button.id = "Edit";
        button.onclick = function() 
        {
            EditFlashCard(parent.parentNode.parentNode);
        };
    }
    return button;
}

function CreateFlashCardWithAnswer(question,answer)
{
    var FlashCardColumn = CreateBootStrapColumn(3,true);
    var row = CreateBootStrapRow();
    FlashCardColumn.appendChild(row);
    var column = CreateBootStrapColumn(12);
    row.appendChild(column);
    column.appendChild(createLabel("question",question,20));
    row = CreateBootStrapRow();
    FlashCardColumn.appendChild(row);
    column = CreateBootStrapColumn(12);
    row.appendChild(column);
    var showHideLabel = createLabel("Show/Hide","",12);

    column.appendChild(showHideLabel);
    column.appendChild(CreateBreakLine());
    var answer = createLabel("Answer",answer,20);
    column.appendChild(answer);

    showHideLabel.onclick = function() 
    {
        ShowHide(answer);
    };

    row = CreateBootStrapRow();
    FlashCardColumn.appendChild(row);
    column = CreateBootStrapColumn(6);
    column.appendChild(CreateButton("Edit",column));
    row.appendChild(column);
    column = CreateBootStrapColumn(6);
    column.appendChild(CreateButton("Delete",column));   
    row.appendChild(column);

    document.getElementById("flashCardPreview").appendChild(FlashCardColumn);
}

function createLabel(type, content,size){
    label = document.createElement("label");
    label.textContent = content;
    label.style.fontSize= size + "px";

    if(type == "Show/Hide"){
        label.id = "ShowHide";
        label.textContent = type;
        label.style.cursor = "pointer";
        label.style.color = "blue";
        label.style.textDecoration = "underline";
    }
    return label;
}

function CreateBreakLine()
{
    return document.createElement("br");
}

function Validate()
{
 if(document.getElementById("question").value == "")
 {
    alert("Fill in your question");
 }
 else if(document.getElementById("answer").value == "")
 {
    alert("Fill in your answer");
 }else{
    CreateFlashCardWithAnswer(document.getElementById("question").value,document.getElementById("answer").value);
 }
}

function StartUp(){
    var templateButton = document.getElementById("flashCardTemplateButtontype");
    templateButton.classList.add("button");
}

function CreateBootStrapRow()
{
    var row = document.createElement("div");
    row.classList.add("row");
    return row;
}

function CreateBootStrapColumn(columnSize,parentFlag)
{
    var column = document.createElement("div");
    column.classList.add("col-sm-" + columnSize);
    if(parentFlag){
        column.id = "Boxanswer";
    }
    return column;
}

function DeleteFlashCard(parent)
{  
    parent.parentNode.removeChild(parent);
}

function EditFlashCard(parent)
{

    var question = parent.children[0].children[0].children[0].textContent;
    var answer = parent.children[1].children[0].children[2].textContent;
    console.log(question);
    console.log(answer);
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").value = answer;
    
    document.getElementById("question").innerHTML = "";
    document.getElementById("question").value = question;
    DeleteFlashCard(parent);
}

function ShowHide(webElement) {
   
    if (webElement.style.display === "none") {
        webElement.style.display = "block";
    } else {
        webElement.style.display = "none";
    }
  }
