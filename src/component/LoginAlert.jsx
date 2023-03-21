import React from "react";

function LoginAlert() {
  const Id = ({ handleIdChange }) => {
    return (
      <>
        <label htmlFor="">ID : </label>
        <input type="text" onChange={handleIdChange} />
      </>
    );
  };

  const Pw = ({ handlePwChange }) => {
    return (
      <>
        <label htmlFor="">PW : </label>
        <input type="password" onChange={handlePwChange} />
      </>
    );
  };
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleLogin = () => {
    alert(`${id}, ${pw}`);
  };

  return (
    <>
      <Id handleIdChange={handleIdChange}></Id>
      <br />
      <Pw handlePwChange={handlePwChange}></Pw>
      <button
        disabled={id.length === 0 || pw.length === 0}
        onClick={handleLogin}
      >
        LOGIN
      </button>
    </>
  );
}

export default LoginAlert;
