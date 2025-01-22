import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <h1 className="title mb24">Добро пожаловать, гость!</h1>
      <p className="text mb40">
        На нашем новостом блоге вы можете найти все самые актуальные новости
        всего мира!
      </p>
      <Link to="/news" className="btn">
        Начать
      </Link>
    </div>
  );
}
