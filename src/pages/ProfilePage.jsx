import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { isAuth, username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/");
  }
  return (
    <div className="login">
      <h1 className="login-title">Мой профиль</h1>
      <h2 className="article-title">Мой никнейм: {username}</h2>
      <button className="btn" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}
