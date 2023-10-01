
// document.getElementById("pword").value.pword.style.display = "none";

document.getElementById("pword").style.Minlength = "6";

document.getElementById("join").onclick = function(){
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let emailid = document.getElementById("emailid");
    let pword = document.getElementById("pword");
    let pword2 = document.getElementById("confirm-pword");
    // Ensure that all fields are filled out and none is left empty
    if(fname.value == " " || lname.value == " " || emailid.value == " " ||
    pword.value == " " || pword2.value == " "){
        alert("All fields must be filled out");
    }
    // Ensure that the Password is not less than six characters long
    else if(pword.length < 6 || pword2.length < 6){
        alert("Password must contain at least six characters");
    }
    // Ensure that the two passwords entered are a match
    else if(pword.value !== pword2.value){
        alert("Passwords must match. Please check again");
    }
    else{
        alert(`Congratulation!!!!! \n You have successfully signed up.`)
    }
}

document.getElementById("continue").onclick = function(){
    alert(`You need a GitHub Account to use this option. \n Besides, we're still working to make this functional`);
}

document.getElementById("signin").onclick = function(){
    alert(`Do well to use your username and password to login`);
}