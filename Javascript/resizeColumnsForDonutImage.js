function ResizeColumns() {

    var image = document.getElementById("DonutImage");
    var columnHeight = image.getAttribute("height") / 2;
    var column1 =document.getElementById("column1");
    var column2 = document.getElementById("column2");
    var column3 = document.getElementById("column3");

    column1.style.height = columnHeight + "vh";
    column2.style.height = columnHeight + "vh";
    column3.style.height = columnHeight + "vh";
  }