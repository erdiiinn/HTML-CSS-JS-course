// var button1 = document.querySelector('button');

// // button1.onclick = function(){
// //     alert('hello')
// // }

// button1.addEventListener('click' ,function(){
//     alert('hello world');
// });

var button2 = document.getElementById('btn1');
var button3 = document.getElementById('btn2');
var button4 = document.getElementById('btn3');
var v_button = document.getElementById('button1');
var v_txt = document.getElementById('txt1');

v_button.onclick = function(){
    v_txt.style.color="red"
    v_txt.style.padding="250px"
}

button2.onmouseover= function(){
    alert('over')
}
button3.onmouseleave= function(){
    alert('leave')
}
button4.onmousewheel= function(){
    alert('wheel')
}