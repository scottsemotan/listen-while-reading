// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkhCEJ_Q1GsxrP8KLyfFLQTFllG2ZnmzE",
    authDomain: "fir-auth-58a09.firebaseapp.com",
    databaseURL: "https://fir-auth-58a09.firebaseio.com",
    projectId: "fir-auth-58a09",
    storageBucket: "fir-auth-58a09.appspot.com",
    messagingSenderId: "155153583583",
    appId: "1:155153583583:web:c81895d0df54185e2e886a",
    measurementId: "G-MX6D4EE1F6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
  function callGoogleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
         // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
         // The signed-in user info.
         var user = result.user;
         document.location.href = 'moviesearch.html';
         // ...
   }).catch(function(error) {
       // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         
      // ...
   });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}