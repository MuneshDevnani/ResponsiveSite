function validateForm() {
var name =  document.getElementById('name').value;
if (name == "") {
    document.getElementById('status').innerHTML = "Please Insert Your Name";
    return false;
}
var email =  document.getElementById('email').value;
if (email == "") {
    document.getElementById('status').innerHTML = "Please Insert Your Email";
    return false;
} else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        document.getElementById('status').innerHTML = "Please Insert Your Correct Email";
        return false;
    }
}
var subject =  document.getElementById('subject').value;
if (subject == "") {
    document.getElementById('status').innerHTML = "Please Insert Your Subject";
    return false;
}
var message =  document.getElementById('message').value;
if (message == "") {
    document.getElementById('status').innerHTML = "Please Insert Your Message";
    return false;
}
document.getElementById('status').innerHTML = "Sending...";
document.getElementById('contact-form').submit();

}