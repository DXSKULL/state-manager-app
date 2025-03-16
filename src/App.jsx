import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import { useSelector } from "react-redux";

import classNames from "classnames";
import { useEffect } from "react";

export default function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  useEffect(()=> {
    document.body.style.background = isDark ? "#151515" : "#fff"
  }, [isDark])
  
  return (
    <>
      <Header />
      <div
        className={classNames("container", {
          dark: isDark,
        })}
      >
        <AppRouter />
      </div>
    </>
  );
}
