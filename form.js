function validation(){

    var name = document.getElementById('name').value;
    // var pass = document.getElementById('pass').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    // var confirmpass = document.getElementById('conpass').value;
    
    
    if(name == ""){
        document.getElementById('username').innerHTML =" ** Please fill the name field";
        return false;
    }
    if((name.length <= 2) || (name.length > 20)) {
        document.getElementById('username').innerHTML =" ** name lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(name)){
        document.getElementById('username').innerHTML =" ** only characters are allowed";
        return false;
    }

    

    if(mobile == ""){
        document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
        return false;
    }
    if(mobile.length!=10){
        document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
        return false;
    }



    if(email == ""){
        document.getElementById('emails').innerHTML =" ** Please fill the email id field";
        return false;
    }
    if(email.indexOf('@') <= 0 ){
        document.getElementById('emails').innerHTML =" ** @ Invalid Position";
        return false;
    }

    if((email.charAt(email.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('emails').innerHTML =" ** . Invalid Position";
        return false;
    }
}