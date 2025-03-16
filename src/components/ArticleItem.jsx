import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

export default function ArticleItem({
  articleId,
  articleImg,
  articleTitle,
  articleDesc,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { isAuth } = useSelector((state) => state.user);

  return (
    <>
      <div className="article">
        <img src={articleImg} alt="img" className="article-img" />
        <div className="article-body">
          <h3 className="article-title">{articleTitle}</h3>
          <p className="article-text">{articleDesc}</p>
          {isAuth ? (
            <Link to={`/news/${articleId}`} className="article-link">
              Подробнее <IoIosArrowForward />
            </Link>
          ) : (
            <Link
              to="/news"
              className="article-link"
              onClick={() => setModalIsOpen(true)}
            >
              Подробнее <IoIosArrowForward />
            </Link>
          )}
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
