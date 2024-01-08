import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import { logoutUSer, profileUser } from "../../api/user";

const Header = () => {
  // const [user, setUser] = useState({});
  const { setUserInfo, userInfo } = useGlobalContext();
  //*takeUser function call api profileUser() then setuser to globalState
  const takeUser = async () => {
    const user = await profileUser();
    console.log("User Login in Header", user);
    setUserInfo(user.data);
  };
  useEffect(() => {
    // * call takeUser Function
    takeUser();
    // const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    // setUser(user);
  }, []);

  const logout = async () => {
    //* call api logout function
    const user = await logoutUSer();
    console.log("user", user);
    if (user.status === 200) {
      setUserInfo({});
    }
    console.log("this user is logout", user);
    // window.location.reload();
  };

  console.log("userInfo in header", userInfo);
  return (
    <div>
      <nav>
        {userInfo?.username ? (
          <ul>
            <li>
              <img
                style={{ width: "50px", borderRadius: "100%", height: "50px" }}
                src={userInfo?.pic}
                alt={userInfo?.username}
              />
            </li>
            <li>logo</li>

            <li>{userInfo?.username}</li>
            <li onClick={logout}>logout</li>
          </ul>
        ) : (
          <ul>
            <li>logo</li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
