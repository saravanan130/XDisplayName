import { useState } from "react";
import "./App.css";

function App() {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { firstName, lastName } = formdata;
    if (firstName && lastName) {
      setFullName(`Full Name: ${firstName} ${lastName}`);
    }
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleClick}>
        <p>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formdata.firstName}
            onChange={handleChange}
            required
          ></input>
          <br />
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formdata.lastName}
            onChange={handleChange}
            required
          ></input>
        </p>
        <button type="submit">Submit</button>
      </form>
      <p>{fullName}</p>
    </>
  );
}

export default App;
