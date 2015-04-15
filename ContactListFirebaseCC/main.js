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
    // contacts.push(contactObj);
}