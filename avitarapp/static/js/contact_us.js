function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false)
        {
            return false;
        }
        return true;

}
var validity_email,email,text_in='',buttons,name_in = ''
function email_input(){
    email = document.getElementById('email');
    validity_email = validateEmail(email);
    console.log(validity_email);
    if (validity_email == false){
        document.getElementById('text').innerHTML = "wrong email address";
    }
    else{
        document.getElementById('text').innerHTML = "";
    }
    check();
}
function text_input(){
    text_in = document.getElementById('texts').value;
    if (text_in.length == 1000){
        document.getElementById('text-text').style.color = "red"
        document.getElementById('text-text').innerHTML = "You reach the max length of 1000 character"
}
    else
        document.getElementById('text-text').innerHTML = ""
    console.log(text_in.length);
    check();
}
function name_input(){
    name_in = document.getElementById('name').value;
    check();
}
function check(){
    if (validity_email == true & text_in != '' & name_in !='')
        document.getElementById('button').disabled = false;
    else
        document.getElementById('button').disabled = true;
}
