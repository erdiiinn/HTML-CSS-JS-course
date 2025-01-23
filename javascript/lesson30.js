var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

function showCurrentTime(){
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    // var noon = currentTime.getDay();

    var meridian = "AM";

    // if(hours >= noon){
    //     meridian = "PM";
    // }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
}

function changeImage(){
    var time = new Date().getHours();
    console.log(time);
    
}
