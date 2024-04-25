import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const LogoutButton = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("chat-user");
    setAuthUser(null);
    navigate("/login");
  };

  return (
    <div className="mt-auto">
      <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logoutHandler}
      />
    </div>
  );
};
export default LogoutButton;
