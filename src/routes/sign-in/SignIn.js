import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/Firebase";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await getRedirectResult(auth);

      if (res) {
        const userDocRef = await createUserDocumentFromAuth(res.user);
      }

      console.log(res);
    };

    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    console.log(user);

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in</h1>
      <button onClick={logGoogleUser}>Sign-in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign-in with google Redirect
      </button>
    </div>
  );
};

export default SignIn;
