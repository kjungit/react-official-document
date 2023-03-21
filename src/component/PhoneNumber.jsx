import React from "react";

function phoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(phoneNumber);
  };

  const handleChange = (e) => {
    if (e.target.value.startsWith(0)) {
      setMessage("Phone Number is valid");
      setPhoneNumber(e.target.value);
    } else if (e.target.value.length === 0) {
      setPhoneNumber("");
      setMessage("");
    } else {
      setPhoneNumber("");
      setMessage("Phone Number should starts with 0");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phone">Phone Number : </label>
      <input
        id="phone"
        name="phone"
        value={phoneNumber}
        onChange={handleChange}
      />
      <p>{message}</p>
      <button
        type="submit"
        disabled={
          phoneNumber.length === 0 || message !== "Phone Number is valid"
        }
      >
        submit
      </button>
      <p>{phoneNumber}</p>
    </form>
  );
}

export default phoneNumber;
