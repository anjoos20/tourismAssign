function validate(){
    console.log("Inside validation");
    let email = document.getElementById("form3Example3");
    let errore = document.getElementById("errore");
    let pwd = document.getElementById("form3Example4");
    let errorp = document.getElementById("errorp");
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    //    let regex = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
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
    console.log(pwd.value.length);
    if (pwd.value.length > 7){
        errorp.innerHTML = "Valid password."
        errorp.style.color = "green";
        pwdok = true;
    }
    else{
        errorp.innerHTML = "Invalid password ";
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