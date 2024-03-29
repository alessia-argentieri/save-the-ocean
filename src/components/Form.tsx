import { FC, useState } from "react";

type User = {
  username: string;
  email: string;
};

const Form: FC = () => {
  const [inputs, setInputs] = useState<User>({ username: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInputs({ username: "", email: "" });
    setSubmitted(true);
    const disappear = () => setSubmitted(false);
    setTimeout(disappear, 9000);
    console.log(inputs);
  };

  return submitted ? (
    <div>
      <p style={{ fontSize: "2rem" }}>
        Thank you for becoming a member! You will receive our free newsletter
        with all our events and initiatives to save the ocean. Never stop
        believing, together we can help our planet.
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className="input"
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          className="input"
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          required
        />
      </label>
      <button className="btn-submit" type="submit">
        Become a member
      </button>
    </form>
  );
};

export default Form;
