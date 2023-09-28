import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';

import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseURL: "https://portfolio-site-a63c3-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)

const database = getDatabase(app)

const msgInDB = ref(database, "message")

  document.getElementById("contact-form").addEventListener("submit", submitform);



 

function submitform(e){
    e.preventDefault();
    var name = document.getElementById("nameinp").value;
    var email = document.getElementById("emailid").value;
    var message = document.getElementById("msgd").value;
   
    
    savemsgs(name, email, message);
    
}

const savemsgs = (name, email, message) => {
    push(msgInDB, {
        "name": name,
        "email": email,
        "message": message
    })
    console.log(`${{
        "name": name,
        "email": email,
        "message": message
    }} added to database`);

    document.getElementById("submit").textContent = "submitted"
};


