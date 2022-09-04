
const box = document.getElementById('timerbox');
const timers = document.getElementById('timers');
const showChrono = document.getElementById("counter");


box.addEventListener('click', function() {
    var hidden = document.getElementsByClassName('hidden');
    box.style.display = 'none';
    timers.style.display = 'none';
    showChrono.innerHTML = " <p class='clicks-count'> Clicks: <span id='clicks-count'>0</span> </p> ";

    for(i =0;i < hidden.length ; i++){
        hidden[i].style.display = "block";
    }
});


