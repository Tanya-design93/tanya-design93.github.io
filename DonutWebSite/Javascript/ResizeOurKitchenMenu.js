function ResizeMenuItems(){
    var biggestItem = getElementByXpath("(.//div[@class='gallery'])[4]");
    var width = biggestItem.style.width;
    var height = biggestItem.style.height;
    resizeItem(1,width,height);
    resizeItem(2,width.height);
    resizeItem(3,width,height);
    resizeImages();
    

}

function resizeImages(){
    document.getElementById("menuItemOne").height = document.getElementById("menuItemTwo").height = document.getElementById("menuItemThree").height = document.getElementById("menuItemFour").height;
     document.getElementById("menuItemOne").width = document.getElementById("menuItemTwo").width = document.getElementById("menuItemThree").width = document.getElementById("menuItemFour").width;
}

function resizeItem(element,width,height){
    var menuItem = getElementByXpath((`(.//div[@class='gallery'])[${element}]`));
    menuItem.style.width = "100%";
    menuItem.style.height = "100%";

}


function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }