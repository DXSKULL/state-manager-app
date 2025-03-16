import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import {useNavigate} from "react-router-dom"

export default function LoginPage() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (input) {
      dispatch(login(input))
      navigate("/")
    } else {
      alert("Заполните имя!");
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1 className="login-title">Войти</h1>
      <input
        type="text"
        placeholder="Введите никнейм"
        className="login-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn">
        Войти
      </button>
    </form>
  );
}
