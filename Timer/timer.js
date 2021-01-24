var x = null;

var isTimeRunning = false;

function StartStop() 
{
  if (isTimeRunning == true) 
  {
    isTimeRunning = false;
    changeButtonName();
    clearInterval(x);
    document.getElementById("demo").innerHTML = "25:00";
  }
  else
  {
    isTimeRunning = true;
    changeButtonName();
    var minutes = 24;
    var counter = 0
    x = setInterval(function() {    
      counter += 1000;
      if(counter == 60000)
      {
        minutes = minutes - 1;
        counter = 1000;var countDownDate = new Date("Jan 23, 2021 00:00:00").getTime();

        // Update the count down every 1 second
        var x = null;
        
        var isTimeRunning = false;
      }
      document.getElementById("demo").innerHTML = minutes + ":" + ((counter -60000) / 1000 * -1);
      
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