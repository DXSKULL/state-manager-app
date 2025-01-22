import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function ArticleItem() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="article">
        <img
          src="https://placehold.co/600x400/000000/ffffff/png"
          alt="img"
          className="article-img"
        />
        <div className="article-body">
          <h3 className="article-title">Тестовый заголовок</h3>
          <p className="article-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            eligendi inventore quasi, molestias officiis voluptatum? Dicta ad
            autem magni asperiores dolorum error corporis?
          </p>
          <Link to="/news" className="article-link">
            Подробнее <IoIosArrowForward />
          </Link>
        </div>
      </div>
      {modalIsOpen && (
        <div className="modal" onClick={() => setModalIsOpen(false)}>
          <div className="modal-container">
            <p className="modal-text">
              Для того, чтобы посмотреть новость в полной версии вам нужно
              авторизоваться!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
