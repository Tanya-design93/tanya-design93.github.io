var x = null;

var isTimeRunning = false;

function StartStop()
{
if (isTimeRunning == true)
{
isTimeRunning = false;
changeButtonName();
clearInterval(x);
document.getElementById("demo").innerHTML = "05:00";
}
else
{
isTimeRunning = true;
changeButtonName();
var minutes = 4;
var counter = 0
x = setInterval(function() {
counter += 1000;
if(counter == 60000)
{
minutes = minutes - 1;
counter = 1000;
}
document.getElementById("demo").innerHTML = "0" + minutes + ":" + ((counter -60000) / 1000 * -1);

}, 1000);
}
}

function changeButtonName()
{
if (isTimeRunning == false)
{
document.getElementById("pomodoro-start").textContent = "Start";
}
else
{
document.getElementById("pomodoro-start").textContent = "Stop";
}
}