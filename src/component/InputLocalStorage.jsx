import React from "react";

function inputLocalStorage() {
  function useLocalStorage(itemName, value = "") {
    const [state, setState] = useState(() => {
      return window.localStorage.getItem(itemName) || value;
    });

    useEffect(() => {
      window.localStorage.setItem(itemName, state);
    }, [state]);

    return [state, setState];
  }
  const [keyword, setKeyword] = useLocalStorage("keyword");
  const [result, setResult] = useLocalStorage("result");
  const [typing, setTyping] = useLocalStorage("typing", false);

  function handleChange(e) {
    setKeyword(e.target.value);
    setTyping(true);
  }

  function handleClick() {
    setTyping(false);
    setResult(`good ${keyword}`);
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={keyword} />
      <button onClick={handleClick}>search</button>
      <div>{typing ? `Looking for ${keyword}...` : result}</div>
    </div>
  );
}

export default inputLocalStorage;
