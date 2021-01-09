var quote = [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
    "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. – Antoine de Saint-Exupery",
    "Before software can be reusable it first has to be usable. – Ralph Johnson",
    "Progress is possible only if we train ourselves to think about programs without thinking of them as pieces of executable code. ― Edsger W. Dijkstra",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Fix the cause, not the symptom. – Steve Maguire"
];

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(9));
}

function GetRandomQuote() {
    var element = document.getElementById("quoteText");
    var randNum = getRandomInt();
    element.innerHTML = quote[randNum];
}

function MainMethod() {
    setTimeout(() => animation(), 0);
    setTimeout(() => GetRandomQuote(), 2500);
    setTimeout(() => animation(), 2500);
}


function animation() {
    if (document.getElementById("spinner").style.visibility) {
        document.getElementById("spinner").style.visibility = "hidden";
        document.getElementById("Quotebutton").style.visibility = "visible";
    } else {
        document.getElementById("spinner").style.visibility = "visible";
        document.getElementById("Quotebutton").style.visibility = "hidden";
    }
}