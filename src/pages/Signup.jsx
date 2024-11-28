import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // sinon reset de mes states et de ma page
    // console.log("submited");
    try {
      const response = await axios.post(
        "https://site--soutien-react-6--fhx5w78hhgzd.code.run/user",
        {
          username: username,
          password: password,
          description: description,
          email: email,
        }
      );

      console.log(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  // const handlePasswordChange = (event) => {
  //   const value = event.target.value;
  //   setPassword(value);
  // };

  // const handleDescriptionChange = (event) => {
  //   const value = event.target.value;
  //   setDescription(value);
  // };

  const handleInputChange = (event, inputType) => {
    if (inputType === "password") {
      setPassword(event.target.value);
    } else if (inputType === "description") {
      setDescription(event.target.value);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            handleInputChange(event, "password");
          }}
        />
        <input
          placeholder="Description"
          type="text"
          name="description"
          value={description}
          onChange={(event) => {
            handleInputChange(event, "description");
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
