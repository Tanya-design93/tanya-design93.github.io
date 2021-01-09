var imageList = ['Images/reddonut.png', 'Images/purpledonut.png', 'Images/twocolordonut.png', 'Images/Whitedonut.png', 'Images/greendonut.png', 'Images/lemondonut.png'];
var boxArray;
var setup = false;

function carousel() {
    addPicture(document.getElementById("boxOne"), imageList[0]);
    addPicture(document.getElementById("boxTwo"), imageList[1]);
    addPicture(document.getElementById("boxThree"), imageList[2]);
}

function addPicture(boxType, imageName) {
    var img = document.createElement('img');
    img.id = imageName;
    img.style.width = "70%";
    img.style.width = "70%";
    img.src = imageName;
    boxType.appendChild(img);

    var shadow = document.createElement('div');
    shadow.classList.add("testing");
    boxType.appendChild(shadow);
}

function changeImage() {
    if (!setup) {
        boxArray = [document.getElementById("boxOne").childNodes[0], document.getElementById("boxTwo").childNodes[0], document.getElementById("boxThree").childNodes[0]];
        setup = true;
    }
    changeOrder(boxArray[0]);
    changeOrder(boxArray[1]);
    changeOrder(boxArray[2]);
}

function changeOrder(imageElement) {
    var length = imageList.length;

    var position = imageList.indexOf(imageElement.id) - 1;
    position = position + 2;
    if (length <= position) {
        imageElement.src = imageElement.id = imageList[0];
    } else {
        imageElement.src = imageElement.id = imageList[position];
    }
}