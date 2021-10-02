import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </>
  );
};

export default Home;
