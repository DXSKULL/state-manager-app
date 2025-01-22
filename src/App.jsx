import { useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";

// 1. Подключение темной темы
// 2. Добавление авторизации
// 3. Добавить запрос на сервер для получение новостей

export default function App() {
  const isDark = useSelector((state) => state.theme.isDark);

  useEffect(() => {
    document.body.style.background = isDark ? "#151515" : "#fff";
  }, [isDark]);

  return (
    <>
      <Header />
      <div
        className={classNames("container", {
          dark: isDark
        })}
      >
        <AppRouter />
      </div>
    </>
  );
}
