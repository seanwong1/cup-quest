import { useEffect, useRef } from 'react';
import jwt_decode from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';

function GoogleSignIn() {
  const navigate = useNavigate();
  const signInDiv = useRef(null);

  useEffect(() => {
    function init() {
      /* global google */
      if (window.google && signInDiv.current) {
        google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
          signInDiv.current,
          { theme: "filled", size: "medium", padding: "0px"}
        );
        google.accounts.id.prompt(); // also display the One Tap dialog

      }
    }

    if (window.google) {
      init();
    } else {
      // If Google API library isn't loaded yet, wait for it to load before initializing
      window.addEventListener('load', init);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('load', init);
    };
  }, []);


  function handleCallbackResponse(response) {
    console.log("encoded jwt id token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject.email);
    navigate('/home');
  }

  return (
    <div className="google-sign-in-button">

      <div ref={signInDiv}></div>
    </div>
  );
}

export default GoogleSignIn;