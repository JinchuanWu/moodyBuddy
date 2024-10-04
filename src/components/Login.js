import React, { useState, useEffect } from 'react';
import { PageFooter } from "./footer";
import { NavBar } from "./navbar";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export function PageLogin(props) {

  // const [action, setAction] = useState("Log In"); // from original designed UI

  const authenticator = getAuth();

  useEffect(() => {
    authenticator.signOut().catch((error) => {
      console.error('Error signing out: ', error);
    });
  }, [authenticator]);

  //an object of configuration values
  const firebaseUIConfig = {
    signInOptions: [
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
      GoogleAuthProvider.PROVIDER_ID,
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
  }

  return (
    <body>
      < NavBar />
      <main>
        <section className="auth-container">
          <h1>Please Sign In Below:</h1>
          <p>*After you signed in, if you toggle the Sign In button again, we will be logged out.</p>
          <StyledFirebaseAuth
            firebaseAuth={authenticator}
            uiConfig={firebaseUIConfig}
          />
        </section>
      </main>
      <PageFooter />
    </body>
  );
}
