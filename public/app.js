document.addEventListener("DOMContentLoaded", function (event) {
  var teacherButton = document.getElementById('teacherButton');
  if (teacherButton) {
    teacherButton.addEventListener('click', function (event) {
      event.preventDefault();
      blockstack.redirectToSignIn();
      //window.location = "http://localhost:5000/teacher.html";
    })
  }
  var signoutButton = document.getElementById("signout-button");
  if (signoutButton) {
    signoutButton.addEventListener('click', function (event) {
      event.preventDefault();
      blockstack.signUserOut("http://localhost:5000/");
    })
  }

  /*function showProfile(profile) {
    var person = new blockstack.Person(profile)
    document.getElementById('heading-name').innerHTML = person.name() ? person.name() : "Nameless Person"
    if (person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
    }
    document.getElementById('section-1').style.display = 'none'
    document.getElementById('section-2').style.display = 'block'
  }*/

  if (blockstack.isUserSignedIn()) {
    var profile = blockstack.loadUserData().profile;
    var person = new blockstack.Person(profile);

    document.getElementById('teacherName').innerHTML = person.name() ? person.name() : "Teacher";

    //showProfile(profile)
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function (userData) {
      window.location = "http://localhost:5000/teacher.html";
    });
  }
});
