import Header from "./components/Header";
import AppRouter from "./components/AppRouter";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
}
