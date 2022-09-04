
      function timer(){
        let timeleft = 10;
        let Clicks = 0;
     document
     .getElementById("clicks")
     .addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
       document
      .getElementById("clicks-count")
      .innerHTML = (++Clicks) + '';
     
      
     })
     ;
  
   
        const timer = setInterval(() => {
              if(timeleft <= 0){
                 clearInterval(timer);
                 const cpss = document.getElementById('cps');
                 const totalclicks = document.getElementById('total_clicks');
                 var cps = (Clicks/10);
                 var hidden2 = document.getElementsByClassName('hidden2');
                 for(i =0;i < hidden2.length ; i++){
                 hidden2[i].style.display = "block";
                 }
                 var hidden3 = document.getElementsByClassName('hidden3');
                 for(i =0;i < hidden3.length ; i++){
                 hidden3[i].style.display = "block";
                 }
                 var hidden = document.getElementsByClassName('hidden');
                 for(i =0;i < hidden.length ; i++){
                 hidden[i].style.display = "none";
                 }
                 cpss.innerHTML = "<p class='score'> CPS : " + cps + "</p>";
                 totalclicks.innerHTML = " <p class='score'> Total Clicks : " + Clicks + "</p>";
                 
  
              }
  
              document.getElementById("progressbar").value = 1-timeleft;
              // document.getElementById('TimerDisplay').innerHTML='00:'+ timeleft; //
              timeleft--;
  
        },1000)};