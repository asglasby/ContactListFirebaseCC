/*

Individual Task:
    Build a new application using Firebase.
    Contact List Application (Name, Phone, Address, Email)
Your app needs to be able to POST to Firebase. (Create)
GET data from Firebase and display it on view (Read)
Stretch
Be able to DELETE data from Firebase
Only do a full GET on page load but keep data in sync 
Be able to UPDATE your data (for example: edit contacts)
Allow for multiple contacts for each person (multiple Phone Numbers, Addresses and Emails)

*/

var firebaseUrl = "https://glowing-fire-7170.firebaseio.com/Contacts/.json";

var Contact = function (name, phone, address, email) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.email = email;    
}

var contacts = [];

var createContact = function () {
    var name = document.getElementById('inputName').value;
    var phone = document.getElementById('inputPhone').value;
    var address = document.getElementById('inputAddress').value;
    var email = document.getElementById('inputEmail').value;
    var contactObj = new Contact(name, phone, address, email);
    PostContact(contactObj);
    // contacts.push(contactObj);
}

// Post contact to Firebase using AJAX
var PostContact = function (contactObj) {
    var request = new XMLHttpRequest();
    request.open('POST', firebaseUrl, true);
    request.onload = function () {
        console.log(this.response);
        if (this.status >= 200 && this.status < 400) {
            
            console.log("Success!");
        }else{
            console.log("Error");
        }
        contacts.push(contactObj);
        displayContacts();
    }
    request.send(JSON.stringify(contactObj));
}

var displayContacts = function () {
    alert("This function is not ready");
    GetContacts();
}

// Get contacts from Firebase using AJAX
var GetContacts = function () {
    var request = new XMLHttpRequest();
    request.open('GET', firebaseUrl, true);
    request.onload = function () {
        console.log(JSON.parse(this.response));
        var response = JSON.parse(this.response);
        for (var prop in response) {
            console.log(prop);
            console.log(response.prop);
            console.log(response[prop]);
            console.log('---------------------------------------------');
            contacts.push(response[prop]);
        }
        console.log(contacts);
    }
    request.send();
}


// Update contact from Firebase using AJAX
var UpdateContact = function () {

}

// Delete contact from Firebase using AJAX
var DeleteContact = function () {

}


