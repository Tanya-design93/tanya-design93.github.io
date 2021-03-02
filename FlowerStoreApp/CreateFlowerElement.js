import {
	Plant
} from '/PlantObj.js';
const prefix = "images/";
const columnImageSizeSmallXS = "col-2";
const columnImageSizeSmall = "col-sm-2";
const columnImageSizeMedium = "col-md-5";
const columnImageSizeLarge = "col-lg-5";
const columnImageSizeLargeXL = "col-xl-5";
var plantType;
var plantStorage = [];
var optionsArray = ["Sparse", "Temperate", "Frequent", "Shade", "Diffused light", "Bright light", "Europe", "America", "Asia", "Africa", "Middle East", "Australia"];

function createFlowerForSale() {
	if (!document.URL.includes("Filter.html")) {
		$.getJSON('Data/Plants.json', function (data) {
			$.each(data.Plants, function (key, val) {
				var plant = new Plant(val.name, val.amountOfSunNeeded, val.wateringFrequency, val.origin, (prefix + val.image), val.description, val.plantType);
				plantStorage.push(plant);
			})
		});
	}
}

function LoadPlants() {
	if (!document.URL.includes("Filter.html")) {
		if (document.cookie.indexOf('name=') == -1) {
			FilterByPlantType("All Plants", false);
		} else {
			FilterByPlantType(getCookie("name"), false);
		}
	}
}

function CreateModalPlant(plantName) {

	$.getJSON('Data/Plants.json', function (data) {
		$.each(data.Plants, function (key, val) {
			if (val.name == plantName) {
				var index = name.indexOf(plantName);
				var newPlant = new Plant(val.name, val.amountOfSunNeeded, val.wateringFrequency, val.origin, (prefix + val.image), val.description, val.plantType);
				document.getElementById("modalFlower").innerHTML = '';
				document.getElementById("modalFlower").appendChild(CreateImageForRow(newPlant, false));
			}
		})
	});
}

function CreateImageForRow(plantObj, expandBool) {
	// "Frame" for image.
	var columnImage = document.createElement("div");

	//Styling
	columnImage.classList.add(columnImageSizeSmallXS);
	columnImage.classList.add(columnImageSizeSmall);
	columnImage.classList.add(columnImageSizeMedium);
	columnImage.classList.add(columnImageSizeLarge);
	columnImage.classList.add(columnImageSizeLargeXL);
	columnImage.style.backgroundColor = "#fff0f0";
	columnImage.classList.add("ml-5");
	columnImage.classList.add("mt-5");
	// Make Image Object.
	var image = document.createElement("img");
	image.classList.add("img-fluid");
	image.classList.add("rounded");
	image.classList.add("mx-auto");
	image.classList.add("d-block");
	columnImage.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
	columnImage.style.borderTopLeftRadius = "20px";
	columnImage.style.borderTopRightRadius = "20px";
	columnImage.style.borderBottomLeftRadius = "20px";
	columnImage.style.borderBottomRightRadius = "20px";
	// Give image object an Image.
	image.src = plantObj.image;
	image.classList.add("PlantImage");
	// Add image to column "frame"
	columnImage.appendChild(image);
	if (expandBool != null) {
		columnImage.className = "";
		columnImage.classList.add("col-12");
	}

	columnImage.appendChild((expandBool != null) ? CreateDescriptionForModalWindow(plantObj) : CreateDescriptionForRow(plantObj));
	return columnImage;
}

function CreateDescriptionForModalWindow(plantObj) {
	//Column for description to be in.
	var columnText = document.createElement("div");
	columnText.style.backgroundColor = "white";
	columnText.style.paddingBottom = "20px";
	columnText.classList.add("no-gutters");
	columnText.appendChild(CreateNameForPlant(plantObj));
	columnText.appendChild(CreateBrightForPlant(plantObj));
	columnText.appendChild(CreateWaterFrequencyForPlant(plantObj));


	// Make a line similar to below by making your own function.
	columnText.appendChild(CreateOriginForPlant(plantObj));
	columnText.appendChild(CreateDescriptionForPlant(plantObj));


	columnText.appendChild(CreateAddButton("invisible"));
	columnText.appendChild(CreateAddButton("remove"));
	columnText.appendChild(CreateAddButton("quantity"));
	columnText.appendChild(CreateAddButton("add"));
	columnText.style.boxShadow = "0 4px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)";
	// Returning the description column.
	columnText.style.borderBottomLeftRadius = "20px";
	columnText.style.borderBottomRightRadius = "20px";

	return columnText;
}

function CreateDescriptionForRow(plantObj, expandBool) {
	//Column for description to be in.
	var columnText = document.createElement("div");
	columnText.style.backgroundColor = "white";
	columnText.style.paddingBottom = "20px";
	columnText.classList.add("no-gutters");
	columnText.appendChild(CreateNameForPlant(plantObj));
	columnText.appendChild(CreateBrightForPlant(plantObj));
	columnText.appendChild(CreateWaterFrequencyForPlant(plantObj));
	columnText.appendChild(CreateOriginForPlant(plantObj));
	columnText.appendChild(CreateAddButton("invisible"));
	columnText.appendChild(CreateAddButton("quantity"));
	columnText.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
	// Returning the description column.
	columnText.style.borderBottomLeftRadius = "20px";
	columnText.style.borderBottomRightRadius = "20px";
	var descriptionButton = document.createElement("Button");
	descriptionButton.textContent = "Description";
	descriptionButton.style.backgroundColor = "white";
	descriptionButton.style.textDecoration = "underline";
	descriptionButton.style.border = "none";
	descriptionButton.setAttribute("data-toggle", "modal");
	descriptionButton.setAttribute("data-target", "#myModal");

	descriptionButton.addEventListener("click", function () {
		CreateModalPlant(plantObj.name)
	});
	columnText.appendChild(descriptionButton);
	if (expandBool != null) {
		columnText.className = "";
		columnText.classList.add("col-12");
	}
	return columnText;

}

function CreateAddButton(buttonType) {
	var columnButton = document.createElement("button");

	if (buttonType == "quantity") {
		columnButton.textContent = "+";
		columnButton.classList.add("float-right");
		columnButton.style.backgroundColor = "#9dc2af";
		columnButton.style.borderRadius = "7px";
		columnButton.addEventListener("click", function () {
			AddRemoveButton(columnButton)
		});
	} else if (buttonType == "invisible") {
		columnButton.style.visibility = "hidden";

	}


	columnButton.style.border = "none";


	return columnButton;
}

function AddRemoveButton(button) {
	button.textContent = (button.textContent == "+") ? "-" : "+";
}

function CreateDescriptionForPlant(plantObj) {
	var plantName = document.createElement("p");
	plantName.innerHTML = plantObj.description;
	plantName.style.fontSize = "20px  ";
	return plantName;
}


function CreateNameForPlant(plantObj) {
	var plantName = document.createElement("p");
	plantName.innerHTML = plantObj.name;
	plantName.style.fontSize = "20px  ";
	return plantName;
}

function CreateWaterFrequencyForPlant(plantObj) {
	var div = document.createElement("div");
	var wateringFrequency = document.createElement("p");
	wateringFrequency.innerHTML = plantObj.wateringFrequency;

	div.appendChild(CreateIcon("url('/images/watericon.png')"));
	div.appendChild(wateringFrequency);
	return div;
}

function CreateBrightForPlant(plantObj) {
	var div = document.createElement("div")
	var plantAge = document.createElement("p");
	plantAge.innerHTML = plantObj.amountOfSunNeeded;
	div.appendChild(CreateIcon("url('/images/Sun.png')"));
	div.appendChild(plantAge);
	return div;
}

function CreateOriginForPlant(plantObj) {
	var div = document.createElement("div");
	var plantorigin = document.createElement("p");
	plantorigin.innerHTML = plantObj.origin;
	div.appendChild(CreateIcon("url('/images/locationicon.png')"));
	div.appendChild(plantorigin);
	return div;
}

function CreateIcon(iconURI) {
	var icon = document.createElement("i");
	icon.style.backgroundImage = iconURI;
	icon.style.backgroundRepeat = "no-repeat";
	icon.style.height = "24px";
	icon.style.width = "24px";
	icon.style.display = "block";
	icon.style.position = "relative";
	icon.style.float = "left";
	icon.classList.add("img-fluid");
	icon.innerHTML = " ";
	return icon;
}


function FilterByPlantType(plant, switchToMainPage) {
	if (document.URL.includes("Filter.html") && switchToMainPage) {

		setCookie("name", plant, 365);
		document.location.href = "/Menu.html";
	}
	setTimeout(function () {
		loadPlantTable(plant);
	}, 10);
}

function loadPlantTable(plant) {
	plantType = (document.cookie.indexOf('name=') == -1) ? plant : getCookie("name");
	delete_cookie("name");

	var plantRow = document.getElementById("plantStore");
	plantRow.innerHTML = "";
	plantStorage.forEach(sortPlant);
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function sortPlant(item, index) {
	var plantRow = document.getElementById("plantStore");
	if (plantType == "All Plants") {
		plantRow.appendChild(CreateImageForRow(item));
	} else if (item.plantType == plantType) {
		plantRow.appendChild(CreateImageForRow(item));
	} else if (item.origin == plantType) {
		plantRow.appendChild(CreateImageForRow(item));
	} else if (item.wateringFrequency == plantType) {
		plantRow.appendChild(CreateImageForRow(item));
	} else if (item.amountOfSunNeeded == plantType) {
		plantRow.appendChild(CreateImageForRow(item));
	}
}

function sortPlantByName(item, index) {
	var plantRow = document.getElementById("plantStore");
	if (item.name.toLowerCase().includes(PlantText.toLowerCase())) {
		plantFound = true;
		plantRow.appendChild(CreateImageForRow(item));
	}
}

function delete_cookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var PlantText;
var plantFound = false;

function DisplayPlant() {
	PlantText = document.getElementById("txtSearch").value;
	var plantRow = document.getElementById("plantStore");
	plantRow.innerHTML = "";
	plantStorage.forEach(sortPlantByName);
	plantType = "All Plants";
	if (plantFound == false) {
		plantStorage.forEach(sortPlant);
	}
	plantFound = false;
}

function addFilterOptionToButtons() {
	document.getElementById("AllPlants").addEventListener("click", function () {
		FilterByPlantType("All Plants", true)
	});
	document.getElementById("Plant").addEventListener("click", function () {
		FilterByPlantType("Plant", true)
	});
	document.getElementById("Cactus").addEventListener("click", function () {
		FilterByPlantType("Cactus", true)
	});
	document.getElementById("Succulent").addEventListener("click", function () {
		FilterByPlantType("Succulent", true)
	});
	if (!document.URL.includes("Filter.html")) {
		document.getElementById("SearchForPlant").addEventListener("click", function () {
			DisplayPlant()
		});
	} else {
		optionsArray.forEach(addFilterHandler);
	}
}

function addFilterHandler(item, index) {
	var plantOption = document.getElementById(item);
	plantOption.addEventListener("click", function () {
		FilterByPlantType(item, true)
	});
}
window.addEventListener('load', addFilterOptionToButtons);
window.addEventListener('load', createFlowerForSale);
window.addEventListener('load', LoadPlants);