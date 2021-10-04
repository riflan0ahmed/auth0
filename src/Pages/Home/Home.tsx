import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="m-5">
      {isAuthenticated && (
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-1">
            <img
              src={user?.picture}
              alt={user?.name}
              height="100px"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="col-span-4 flex flex-col my-auto">
            <div className="grid grid-cols-5">
              <label className="col-span-1 font-medium text-gray-700">
                Username :-
              </label>
              <label className="col-span-4 font-normal text-gray-500">
                {user?.name}
              </label>
            </div>
            <div className="grid grid-cols-5">
              <label className="col-span-1 font-medium text-gray-700">
                Email :-
              </label>
              <label className="col-span-4 font-normal text-gray-500">
                {user?.email}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
