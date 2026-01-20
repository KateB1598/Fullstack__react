import React, { useState } from "react";
const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("Form Submit", username, password);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleNameBlur = () => {
    if (username.length < 4) {
      setUserNameError("Min length 4");
    } else if (username.length > 6) {
      setUserNameError("Max length 6");
    } else {
      setUserNameError("");
    }
  };
  const isFormValid =
    username.length >= 4 && password.length >= 8 && usernameError.length === 0;

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          //required
          onChange={(e) => handleNameChange(e)}
          onBlur={handleNameBlur}
        />
        {usernameError && <p>{usernameError}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          //required
          minLength={4}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};
export default LoginForm;
