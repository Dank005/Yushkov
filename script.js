//Checking of Phone number field 
function CheckValdation()
{
    checkName("FirstName");
    checkName("LastName");
    checkDest();
    checkPhone();
    checkDate();
    checkQuantity();
}

function checkName(name) { 
    var testName = document.getElementById(name).value; 
    var regex = /^[a-zA-Z\s]{2,20}$/; 
    
    if (regex.test(testName)) { // if testing of first is true 
        document.getElementById(name).style.backgroundColor = "green"; 
        document.getElementById(name).innerHTML = "Input correct :)"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById(name).style.backgroundColor = "red";    
        document.getElementById(name).innerHTML = "Input is incorrect!";   
        return false; 
    } 
} 

function checkDest() { 
    var testDest = document.getElementById("Destination").value; 
    var regex = /^[a-zA-Z\s\.\,\d\ ]{5,50}$/; 
    
    if (regex.test(testDest)) { // if testing of dest is true 
        document.getElementById("Destination").style.backgroundColor = "green"; 
        document.getElementById("Destination").innerHTML = "Input correct :)"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("Destination").style.backgroundColor = "red"; 
        document.getElementById("Destination").innerHTML = "Please, enter 2-50 characters"; 
        return false; 
    } 
} 

function checkPhone() { 
    var phone = document.getElementById("PhoneNumber").value; 
    var regex = /^\d{3}-(\d{3})-\d{3}$/; 
    
    if (regex.test(phone)) { // if testing of first is true 
        document.getElementById("PhoneNumber").style.backgroundColor = "green"; 
        document.getElementById("PhoneNumber").innerHTML = "Input correct :)"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("PhoneNumber").style.backgroundColor = "red";    
        document.getElementById("PhoneNumber").innerHTML = "Input is incorrect!";   
        return false; 
    } 
} 

function checkDate() {
    var phone = document.getElementById("DateAndTime").value; 
    var regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/; 
    
    if (regex.test(phone)) { // if testing of first is true 
        document.getElementById("DateAndTime").style.backgroundColor = "green"; 
        document.getElementById("DateAndTime").innerHTML = "Input correct :)"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("DateAndTime").style.backgroundColor = "red";    
        document.getElementById("DateAndTime").innerHTML = "Input is incorrect!";   
        return false; 
    } 
} 

function checkQuantity() {
    var count = document.getElementById("Quantity").value; 
    
    if (count>0) { // if testing of first is true 
        document.getElementById("Quantity").style.backgroundColor = "green"; 
        document.getElementById("Quantity").innerHTML = "Input correct :)"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("Quantity").style.backgroundColor = "red";    
        document.getElementById("Quantity").innerHTML = "Input is incorrect!";   
        return false; 
    } 
} 