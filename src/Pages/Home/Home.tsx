import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";

const Home = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const history = useHistory();
  return (
    <div className="">
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}

      <button
        onClick={() => {
          logout({ returnTo: window.location.origin });
          history.push("/login");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
