function validation() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = "";


    if(firstname === "" ) {
        text = "Please enter your first name";
        error.innerHTML = text;
        return false;
    } 
    else if (lastname === "") {
        text = "Please enter your last name";
        error.innerHTML = text;
        return false;
    } 
    else if (email.indexOf("@") == -1 || email.length < 10 ) {
        text = "Please enter a valid email";
        error.innerHTML = text;
        return false;
    } 
    else if (isNaN(phone) || phone.length != 11) {
        text = "Please enter your phone number";
        error.innerHTML = text;
        return false;
    } 
    else {
        return true;
        alert("Done");
    }

}