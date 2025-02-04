function validation(){
    var name = document.getElementById("name").value;
    var valid_name = /^[A-Za-z]+$/;

    // if(name.match(valid_name)){
    //     return true;
    // }else{
    //     document.getElementById("name_error").style.visibility = 'visible';
    //     document.getElementById("name").style.bordercolor = 'red';
    //     return false;
    // }

    if(name.match(valid_name)&& age.match(valid_age)){
        return true;
    }else if(!(name.match(valid_name))){
        document.getElementById("name_error").style.visibility = 'visible';
        document.getElementById("name").style.borderColor = 'red';
        return false;
    }else if(!(age.match(valid_age))){
        document.getElementById("age_error").style.visibility = 'visible';
        document.getElementById("age").style.borderColor ='red';
        return false;
    }
}