
// granim.js library for animated gradient in background

var granimInstance = new Granim({
  element: '#canvas-complex',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              [
                  { color: '#833ab4', pos: .2 },
                  { color: '#fd1d1d', pos: .8 },
                  { color: '#38ef7d', pos: 1 }
              ], [
                  { color: '#40e0d0', pos: 0 },
                  { color: '#ff8c00', pos: .2 },
                  { color: '#ff0080', pos: .75 }
              ],
          ]
      }
  }
});

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
         console.log(token);
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
///Function to grab new user's signup info and grant access to search page.
var signUp = document.getElementById('signUp');

signUp.addEventListener('click', function(){
var formName = document.getElementById('formName').value
var formEmail = document.getElementById('formEmail').value
var formPass = document.getElementById('formPass').value

if(formName == '' || formEmail == '' || formPass == '') {
  alert("Please fill in form completely");
}

var signUpInfo = {
  Name: formName,
  Email: formEmail,
  Password: formPass
}
console.log(signUpInfo);

if(formName && formEmail && formPass) {
  location = 'moviesearch.html';
}

});


