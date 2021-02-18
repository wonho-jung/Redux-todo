import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";
import "./Input.css";
const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };
  return (
    <div className="input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter here"
        type="text"
      />
      <button onClick={addTodo}>Add!</button>
    </div>
  );
};

export default Input;
