// function printNames(){
//     document.write("John Doe");
//     document.write('<br>');
//    setTimeout (function(){document.write("Ana")}, 2000);

// }
// printNames();

var colors = ['red', 'green', 'blue', 'purple'];
var names = ['John', 'Ana', 'Bob', 'Mark'];


function changeBgcolors(){
    document.querySelector('body').style.backgroundColor = colors(Math.floor(Math.floor * colors.length));
}

function changenames(){
    document.getElementById('p').innerHTML = names(Math.floor(Math.floor * names.length));
}

setInterval(changeBgcolors, 1000);
setInterval(changenames, 1000);
