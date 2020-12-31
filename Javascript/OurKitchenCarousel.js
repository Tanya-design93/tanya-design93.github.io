// two duplicate Images at the end, not a bug.
var imageList = ['Images/cookingdonut.jpg', 'Images/friedonuts.jpg', 'Images/donutsballs.jpg', 'Images/Chef.jpg', 'Images/shopdonut.jpg', 'Images/cookingtime.jpg', 'Images/Donutsinprocess.jpg','Images/Makingdonuts.jpg', 'Images/Kidsdonuts.jpg','Images/Buttermilk.jpg','Images/cookingdonut.jpg', 'Images/friedonuts.jpg' ];
var boxArray = [];
var setup = false;
var menuItemArray;


function carousel() {
    menuItemArray = document.querySelectorAll("[class^='menuItems']");
    console.log( menuItemArray.length);
    for(i = 0; i < menuItemArray.length; i++){
        console.log( menuItemArray.length);
        addPicture(menuItemArray[i],imageList[i]);
    }
}


function addPicture(boxType, imageName) {
    var img = document.createElement('img');
    img.id = imageName;
    img.style.width = "100%";
    img.style.height = "12.5vw";
    img.classList.add("img-fluid");
    img.content = "url('../Images/" + imageName + "');"
    imageElement.src = imageName;
    
    boxType.appendChild(img);
}

function changeImage() {
    if (!setup) {
        for(i = 0; i < menuItemArray.length;i++){
            boxArray.push(menuItemArray[i].childNodes[0]);
        }
        setup = true;
    }
    else
    {
        for(i = 0; i < boxArray.length;i++)
        {
            changeOrder(boxArray[i]);
        }
    }
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