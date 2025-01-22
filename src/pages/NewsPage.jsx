import ArticleItem from "../components/ArticleItem";

export default function NewsPage() {
  return (
    <div className="news">
      <h1 className="title">Последние новости</h1>
      <div className="news-grid">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    </div>
  );
}
