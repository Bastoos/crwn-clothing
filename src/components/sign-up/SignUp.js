import React, { useState } from "react";

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

  const handleSubmit = (data) => {};
  return (
    <div>
      <h1>Sign up with you email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          placeholder="Name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
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
