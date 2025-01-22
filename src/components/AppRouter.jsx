import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ArticlePage from "../pages/ArticlePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/news/:id" element={<ArticlePage />} />
    </Routes>
  );
}
