import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}

      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </>
  );
};

export default Home;
