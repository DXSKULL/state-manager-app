import { useEffect } from "react";
import ArticleItem from "../components/ArticleItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/slices/newsSlice";

export default function NewsPage() {
  const { items, isLoading } = useSelector((state) => state.news);
  console.log(items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="news">
      <h1 className="title">Последние новости</h1>
      <div className="news-grid">
        {isLoading ? (
          !items && <p className="message">Loading...</p>
        ) : (
          <>
            {items.map(
              (item) =>
                item.urlToImage && (
                  <ArticleItem
                    articleId={item.id}
                    articleImg={item.urlToImage}
                    articleTitle={item.title}
                    articleDesc={item.description}
                  />
                )
            )}
          </>
        )}
      </div>
    </div>
  );
}
