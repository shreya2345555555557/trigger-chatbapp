var firebaseConfig = {
    apiKey: "AIzaSyCy3LOwK-yFEcAsFGIu7Lzn8m22GzxkSu0",
    authDomain: "project-434f6.firebaseapp.com",
    databaseURL: "https://project-434f6-default-rtdb.firebaseio.com",
    projectId: "project-434f6",
    storageBucket: "project-434f6.appspot.com",
    messagingSenderId: "407143653133",
    appId: "1:407143653133:web:d871841df1ee2411b11a44",
    measurementId: "G-06Q92YYKHB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}