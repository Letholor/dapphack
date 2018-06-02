document.addEventListener("DOMContentLoaded", function (event) {
  var teacherButton = document.getElementById('teacherButton');
  if (teacherButton) {
    teacherButton.addEventListener('click', function (event) {
      event.preventDefault();
      blockstack.redirectToSignIn();
    })
  }
  var signoutButton = document.getElementById("signout-button");
  if (signoutButton) {
    signoutButton.addEventListener('click', function (event) {
      event.preventDefault();
      blockstack.signUserOut("http://localhost:5000/");
    })
  }

  function loadProfile(profile) {
    var person = new blockstack.Person(profile);
    document.getElementById('teacherName').innerHTML = person.name() ? person.name() : "Teacher";

    if (person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
    }

  }

  if (blockstack.isUserSignedIn()) {
    var profile = blockstack.loadUserData().profile;
    loadProfile(profile);
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function (userData) {
      window.location = "http://localhost:5000/teacher.html";
    });
  }
});
