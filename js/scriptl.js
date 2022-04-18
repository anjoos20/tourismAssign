function validate(){
    console.log("Inside validation");
    let email = document.getElementById("form3Example3");
    let errore = document.getElementById("errore");
       let pwd = document.getElementById("form3Example4");
       let errorp = document.getElementById("errorp");
       let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    //    let regex = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
       let strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
       let medium = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
       var emailok = new Boolean(false);
       var pwdok = new Boolean(false);
    if (regexp.test(email.value)){
        errore.innerHTML = "Valid Email format";
        errore.style.color = "green";
        emailok = true;
    }
    else{
        errore.innerHTML = "Invalid emailid format";
        errore.style.color = "red";
        emailok=false;
    };
    if (strong.test(pwd.value)){
        errorp.innerHTML = "Strong password."
        errorp.style.color = "green";
        pwdok = true;
    }
    else if (medium.test(pwd.value)){
        errorp.innerHTML = "Medium password."
        errorp.style.color = "orange";
        pwdok = true;  
    }
    else{
        errorp.innerHTML = "Weak password: Password should have both uppercase, lowercase alphabets and numerics ";
        errorp.style.color = "red";
        pwdok = false;
    };
    if (emailok && pwdok) {
        return true;
    }
    else {
        return false;
    }
    
};