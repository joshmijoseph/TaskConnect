function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Handle the response as needed, e.g., send it to your server for verification.
  }
  
  window.onload = function() {
    google.accounts.id.initialize({
      client_id: "434361129103-hkuonu5rhorgcv26dglqs902dnqlnkho.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  };
  
  