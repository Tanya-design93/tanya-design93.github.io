var dailydonutsArray = ["Images/carameldonut.png","Images/coco.png","Images/cocodonut.png","Images/beigedonut.png","Images/browndonut.png","Images/secondwhite.png","Images/nutdonut.png", "Images/chocowhitedonut.png", "Images/simpledonut.png" ];
var specialdonutsArray = ["Images/reddonut.png","Images/purpledonut.png","Images/twocolordonut.png","Images/greendonut.png", "Images/lemondonut.png"];
var bagelArray = ["Images/bagelfirst.png","Images/baconbagel.png"];

var drinksArray = ["Images/tea.png","Images/coffeenew.png","Images/egnog.png","Images/boba.png", "Images/coca.png", "Images/milkshaketwonew.png"];

var drinksArrayText = ["Tea $3","Latte $5","Eggnog $4", "Boba $8", "Coca cola $3", "Milkshake $6",];
var specialdonutsArrayText =["Strawberry donut $36/per dozen",'Blueberry donut $36/per dozen','Coconut donut $36/per dozen','White chocolate donut $36/per dozen','Pistachio donut $36/per dozen', 'Lemon donut $36/per dozen'];
var bagelArrayText =["Proshuto bagel $10","Bacon bagel $8"];
var dailydonutsArrayText =["Caramel donut $20/per dozen","Dark chocolate $20/per dozen","Cacao donut $25/ per dozen","Vanila donut $19/per dozen","Milky donut $22/per dozen","Brown sugar donut $17/per dozen","Nuts donut $18/per dozen", "Coco powder donut $15/per dozen", "Classic donut $13/per dozen"];


function filterSelection(foodType) {

deleteChild(); 

if(foodType == "daily donuts"){
ShowFoodItems(dailydonutsArray,dailydonutsArrayText);
}
 if(foodType == "bagel"){
ShowFoodItems(bagelArray,bagelArrayText);
}

if(foodType == "special donuts"){
ShowFoodItems(specialdonutsArray,specialdonutsArrayText);

}

if(foodType == "drinks"){
  ShowFoodItems(drinksArray,drinksArrayText);

}

if(foodType == "all"){
  ShowFoodItems(dailydonutsArray.concat(specialdonutsArray).concat(bagelArray).concat(drinksArray),dailydonutsArrayText.concat(specialdonutsArrayText.concat(bagelArrayText.concat(drinksArrayText))));
}

}

function ShowFoodItems(foodArray, foodArrayDescription){
  for(var i = 0; i < foodArray.length;i++){
    addElement("foodItems", foodArray[i], foodArrayDescription[i]);
  }
}

function addElement(parentContainer, elementId, descriptionText) {
  // Adds a food item to the menu.
  var parentContainer = document.getElementById(parentContainer);
  var column = CreateColumn();

  column.appendChild(CreateImageElement(elementId));
 // column.appendChild(CreateColumnDescriptionText(descriptionText.split("$")));
 // column.appendChild(CreateAddToCartButton(descriptionText.split("$")[0]));
  column.id = (descriptionText.split("$")[0].trim());
  parentContainer.appendChild(column);
}

function CreateColumn()
{
  var col = document.createElement("div");
  col.classList.add("col-md-4");
  col.classList.add("background-color-effect");
  col.classList.add("pl-2");
  return col;
}

function CreateImageElement(elementId){
  var imageElement = document.createElement("img");
  imageElement.style.width = imageElement.style.height = "18vw";
  imageElement.src = elementId;
  imageElement.classList.add("imageCover");
  imageElement.classList.add("img-fluid");
  return imageElement;
}

function CreateColumnDescriptionText(descriptionArray)
{
   var columnDescription = document.createElement("p");
   var textOne = document.createTextNode(descriptionArray[0]);
   textTwo = document.createTextNode("$" + descriptionArray[1]);
   columnDescription.appendChild(textOne);  
   columnDescription.appendChild(document.createElement("br"));
   columnDescription.appendChild(textTwo);
   columnDescription.classList.add("MenuTextStyling");
   return columnDescription;
}
function CreateAddToCartButton(productName)
{
  var addToCartButton = document.createElement("BUTTON");
  addToCartButton.appendChild(document.createTextNode("Add To Cart"));
  addToCartButton.style.width= "100%";
  addToCartButton.style.color="tomato";
  addToCartButton.style.borderTopColor="tomato";
  addToCartButton.style.borderBottomColor="tomato";
  addToCartButton.style.borderStyle="solid";
  addToCartButton.style.borderLeftColor="tomato";
  addToCartButton.style.borderRightColor="tomato ";
  addToCartButton.style.backgroundColor="white";
  addToCartButton.setAttribute("onclick","addToCart(\"" + productName + "\");");
  return addToCartButton;
}

function CreateRemoveFromCartButton(productName)
{
  var removeFromCartButton = document.createElement("BUTTON");
  removeFromCartButton.appendChild(document.createTextNode("Remove From Cart"));
  removeFromCartButton.style.width= "100%";
  removeFromCartButton.style.backgroundColor="white";
  removeFromCartButton.setAttribute("onclick","removeFromCart(\"" + productName + "\");");
  removeFromCartButton.id = ("removeFromCart");
  return removeFromCartButton;
}


function deleteChild() { 
  var e =  document.getElementById("foodItems");
  
  //e.firstElementChild can be used. 
  var child = e.lastElementChild;  
  while (child) { 
      e.removeChild(child); 
      child = e.lastElementChild; 
  } 
} 