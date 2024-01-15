import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/Firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    console.log(user);

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in</h1>
      <button onClick={logGoogleUser}>Sign-in with google</button>
    </div>
  );
};

export default SignIn;
