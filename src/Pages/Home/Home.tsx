import { useAuth0 } from "@auth0/auth0-react";

// interface User {
//   name: string;
//   picture: string;
//   email: string;
// }

const Home = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      {isAuthenticated && (
        <div>
          {/* <img src={user.picture} alt={user.name} /> */}
          {/* <h2>{user.name}</h2> */}
          {/* <p>{user.email}</p> */}
          {user}
        </div>
      )}
    </>
  );
};

export default Home;
