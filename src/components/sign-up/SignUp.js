import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";
import FormInput from "../form-input/FormInput";

const defaultValues = {
  displayName: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultValues);
  const { displayName, email, password, confirm_password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event, data) => {
    try {
      event.preventDefault();

      if (password != confirm_password) {
        alert("PassWords don't match");
        return;
      }

      const res = await createAuthUserWithEmailAndPassword(email, password);

      if (res) {
        const userDocRef = await createUserDocumentFromAuth({
          ...res.user,
          displayName,
        });

        setFormFields(defaultValues);
      }
    } catch (error) {
      console.error(error);
      Promise.reject(error);
    }
  };

  return (
    <div>
      <h1>Sign up with you email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          label={"Confirm Password"}
          type="password"
          name="confirm_password"
          value={confirm_password}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
