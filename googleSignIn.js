function initGoogleSignIn() {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: '434361129103-hkuonu5rhorgcv26dglqs902dnqlnkho.apps.googleusercontent.com',
      });
    });
  }
  
  document.getElementById('google-signin-btn').addEventListener('click', function() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function(googleUser) {
      // Handle the signed-in user here, e.g., send the user info to your server or display a welcome message.
      console.log('Signed in as: ' + googleUser.getBasicProfile().getName());
    }, function(error) {
      console.log('Sign-in error:', error);
    });
  });
  
  // Initialize Google Sign-In when the page loads
  document.addEventListener('DOMContentLoaded', initGoogleSignIn);
  