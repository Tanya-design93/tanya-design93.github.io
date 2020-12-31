let shoppingCart = new Map();
let shoppingCartTotal;

function addToCart(donutToBeAdded) {
    if (shoppingCart.has(donutToBeAdded)) {
        var amountInCart = shoppingCart.get(donutToBeAdded);
        console.log(`${donutToBeAdded} ${amountInCart} are in the cart`);
        shoppingCart.set(donutToBeAdded, amountInCart + 1);
        console.log(donutToBeAdded + " has been added to cart! " + amountInCart + " in your cart.");

    } else {
        shoppingCart.set(donutToBeAdded, 1);
        console.log(donutToBeAdded + "To Cart");
    }

    if(!document.getElementById(donutToBeAdded.trim()).querySelector("#removeFromCart"))
    {
        document.getElementById(donutToBeAdded.trim()).appendChild(CreateRemoveFromCartButton(donutToBeAdded));
    }
    GetCartCount();
    if (shoppingCartTotal > 0) {
        enableCartCount();
    }
}

function removeFromCart(donutToBeRemoved) {

    var amountInCart = shoppingCart.get(donutToBeRemoved);
    shoppingCart.set(donutToBeRemoved, (amountInCart-1));
    GetCartCount();
    if (shoppingCartTotal == 0) 
    {        
        shoppingCart.forEach(disableAllRemoveButtons);
        disableCartCount();
    }

}

function disableAllRemoveButtons(value, key, map) {

    document.getElementById(`${key}`.trim()).removeChild(document.getElementById("removeFromCart"));
  }

function GetCartCount() {
    shoppingCartTotal = 0;
    shoppingCart.forEach(findDonutTypeCount);
    console.log(shoppingCartTotal);
    document.getElementById("cartcount").innerHTML = shoppingCartTotal
}

function findDonutTypeCount(value) {
    shoppingCartTotal += value;
}

function enableCartCount() {
    console.log(" making cart count visible.");
    document.getElementById("cartcount").style.visibility = "visible";
}

function disableCartCount() {
    document.getElementById("cartcount").style.visibility = "hidden";

}