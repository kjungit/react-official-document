import React from "react";

function arrayKey() {
  const todos = [
    [
      { id: 1, value: "apple" },
      { id: 2, value: "banana" },
      { id: 3, value: "carrot" },
      { id: 4, value: "strawberry" },
    ],
    [
      { id: 2, value: "banana" },
      { id: 1, value: "apple" },
      { id: 3, value: "strawberry" },
      { id: 4, value: "carrot" },
    ],
    [
      { id: 2, value: "carrot" },
      { id: 3, value: "strawberry" },
      { id: 1, value: "apple" },
      { id: 4, value: "banana" },
    ],
    [
      { id: 2, value: "strawberry" },
      { id: 3, value: "carrot" },
      { id: 4, value: "banana" },
      { id: 1, value: "apple" },
    ],
  ];

  const [items, setItems] = useState(todos[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      setItems(todos[random]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleDoneClick = (todo) => {
    setItems((items) => items.filter((item) => item !== todo));
  };

  const handleRestoreClick = () => {
    setItems((items) => [
      ...items,
      todos.find((item) => !items.includes(item)),
    ]);
  };

  return (
    <>
      {items.map((todo, index) => (
        <div key={index}>
          <button onClick={() => handleDoneClick(todo)}>{todo.value}</button>
        </div>
      ))}
      <button onClick={() => handleRestoreClick}>Restore</button>
    </>
  );
}

export default arrayKey;
