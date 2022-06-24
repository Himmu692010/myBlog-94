// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApge5JIU9JVOCIv8wJCWyE39uv2gMVYw4",
  authDomain: "kwitter-project-f4474.firebaseapp.com",
  databaseURL: "https://kwitter-project-f4474-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-f4474",
  storageBucket: "kwitter-project-f4474.appspot.com",
  messagingSenderId: "522157268867",
  appId: "1:522157268867:web:0961c4e98d10b0b53ba0b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addroom() {
    room_name = document.getElementById("room_name").value;

   localStorage.setItem("Roomname",room_name);

   firebase.database().ref("/").child(room_name).update({
         purpose: "Adding Room Name"
   });
}

function logout(){
  window.location="index.html";
}