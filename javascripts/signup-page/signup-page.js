
// document.getElementById("pword").value.pword.style.display = "none";

document.getElementById("join").onclick = function(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let emailid = document.getElementById("emailid").value;
    let pword = document.getElementById("pword").value;
    let pword2 = document.getElementById("confirm-pword").value;
    // Ensure that the First Name is filled out and not left empty
    if(fname == " "){
        alert("First Name must be filled out");
        return false;
    }
    // Ensure that the Last Name is filled out and not left empty
    else if(lname == " "){
        alert("Last Name must be filled out");
        return false;
    }
    // Ensure that the Email Address is filled out and not left empty
    else if(emailid == " "){
        alert("Email Address must be filled out");
        return false;
    }
    // Ensure that the Email Address is not less than six characters long
    else if(pword.length < 6){
        alert("Password must contain at least six characters");
        return false;
    }
    // Ensure that the two passwords entered are a match
    else if(pword !== pword2){
        alert("Passwords must match. Please check again");
        return false;
    }
    else{
        alert(`Congratulation!!!!! \n You have successfully signed up.`)
    }
}