document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('teacherButton').addEventListener('click', function(event) {
    event.preventDefault()
    blockstack.redirectToSignIn()
  })
  document.getElementById('signout-button').addEventListener('click', function(event) {
    event.preventDefault()
    blockstack.signUserOut("localhost:5000")
  })

  function showProfile(profile) {
    var person = new blockstack.Person(profile)
    document.getElementById('heading-name').innerHTML = person.name() ? person.name() : "Nameless Person"
    if(person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
    }
    document.getElementById('section-1').style.display = 'none'
    document.getElementById('section-2').style.display = 'block'
  }

  if (blockstack.isUserSignedIn()) {
    var profile = blockstack.loadUserData().profile
      showProfile(profile)
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function(userData) {
      window.location = "localhost:5000/teacher.html";
    })
  }
})
