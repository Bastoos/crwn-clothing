import { useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/Firebase";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up-form/SignUp";
import SignIn from "../../components/sign-in-form/SignIn";

const Authentication = () => {
  return (
    <div>
      <h1>Sign-in</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
