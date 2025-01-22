import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-part">
          <h1 className="logo">TestApp</h1>
        </div>
        <div className="nav-part">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Главная
            </Link>
            <Link to="/news" className="nav-link">
              Новости
            </Link>
            <Link to="/login" className="nav-link">
              Войти
            </Link>
            <div className="light">
              <MdOutlineLightMode />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
