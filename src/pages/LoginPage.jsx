import { useState } from "react";

export default function LoginPage() {
  const [input, setInput] = useState("");

  return (
    <form className="login">
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
