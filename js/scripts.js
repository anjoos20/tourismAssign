function validate(){
    let email = document.getElementById("emailAddress");
    let errore = document.getElementById("errore");
    let phone = document.getElementById("phoneNumber");
    let errorp = document.getElementById("errorp");
    let fname = document.getElementById("firstName");
    let errorf = document.getElementById("errorf");
    let lname = document.getElementById("lastName");
    let errorl = document.getElementById("errorl");
    let bday = document.getElementById("birthdayDate");
    let errorb = document.getElementById("errorb");
    let pwd = document.getElementById("Password");
    let errorpw = document.getElementById("errorpw");
    let rpwd = document.getElementById("Rpassword");
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let fnamex = /[A-Z][a-z]*/;
    let lnamex = /[A-Z]+([ '-][a-zA-Z]+)*/;
    let bdayx  = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    let strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    let medium = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    var emailok = new Boolean(false);
    var phoneok = new Boolean(false);
    var fnameok = new Boolean(false);
    var lnameok = new Boolean(false);
    var dobok   = new Boolean(false);
    var pwok   = new Boolean(false);
    if (regexp.test(email.value)){
        errore.innerHTML = "Valid Email id format";
        errore.style.color = "green";
        emailok = true;
    }
    else{
        errore.innerHTML = "Invalid Email id format";
        errore.style.color = "red";
        emailok=false;
    };
    if (phoneno.test(phone.value)){
        errorp.innerHTML = "Valid format"
        errorp.style.color = "green";
        phoneok = true;
    }
    else{
        errorp.innerHTML = "Invalid format: phone mumber must be typed in XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX formats";
        errorp.style.color = "red";
        pwdok = false;
    };
    if (fnamex.test(fname.value)){
        errorf.innerHTML = "Valid first name format"
        errorf.style.color = "green";
        fnameok = true; 
    }
    else{
        errorf.innerHTML = "Invalid first name format";
        errorf.style.color = "red";
        fnameok=false;
    };
    if (lnamex.test(lname.value)){
        errorl.innerHTML = "Valid last name format"
        errorl.style.color = "green";
        lnameok = true; 
    }
    else{
        errorl.innerHTML = "Invalid last name format";
        errorl.style.color = "red";
        lnameok=false;
    };
    if (bdayx.test(bday.value)){
        errorb.innerHTML = "Valid date of birth";
        errorb.style.color = "green";
        dobok = true; 
    }
    else{
        errorb.innerHTML = "Invalid date of birth: Must be in DD/MM/YYYY format";
        errorb.style.color = "red";
        dobok=false;
    };  
    if (pwd.value == rpwd.value){
        if (strong.test(pwd.value)){
            errorpw.innerHTML = "Strong password.";
            errorpw.style.color = "green";
            pwok = true;
        }
        else if (medium.test(pwd.value)){
            errorpw.innerHTML = "Medium strong password.";
            errorpw.style.color = "orange";
            pwok = true;  
        }
        else{
            errorpw.innerHTML = "Weak password: Password must contain both uppercase, lowercase alphabets and numerics. Try again ";
            errorpw.style.color = "red";
            pwok = false;
        };    
    }
    else{
        errorpw.innerHTML = "Password do not match. Try again";
        errorpw.style.color = "red";
        pwok=false;
    };
    
    if (emailok && phoneok && fnameok && lnameok && dobok && pwok) {
        return true;
    }
    else {
        return false;
    };
    
};