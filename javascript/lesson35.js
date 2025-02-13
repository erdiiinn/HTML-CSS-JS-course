// var slideIndex = 1;
// function showSlides(n){
//     var slides = document.getElementsByClassName('slide');
//     for(i=0; i<slides.length; i++){
//         slides[i].style.display = 'none';
// }

// if(n>slides.length){
//     slideIndex = 1;
// } 

// if(n<1){
//     slideIndex = slides.length;
// }

// slides[slideIndex-1].style.display = 'block';
// }

// function plusSlide(n){
//     slideIndex = n;
//     showSlides=(slideIndex);
// }

// showSlides(1);

function search(){
    var input, filter, ul, li, a, i, textValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myList');
    li = ul.getElementsByTagName('li');
    for(i = 0; i<li.length; i++){
        a=li[i];
        textValue = a.textContent;
        if(textValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "";
        } else{
            li[i].style.display = "none";
        }
    }
}

function openMenu(){
    var menu = document.getElementById('myLinks');
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    } else{
        menu.style.display = 'block';
    }
}