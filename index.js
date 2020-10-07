
// granim.js library for animated gradient in background

var granimInstance = new Granim({
  element: '#canvas-image',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  image : {
      source: '/images/city.png',
      position: ['center', 'bottom'],
      blendingMode: 'multiply', 
      stretchMode: ['stretch-if-smaller', 'none']
  },
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
          ],
          transitionSpeed: 7000
      }
  }
});

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


