import { useAuth0 } from "@auth0/auth0-react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Button, IconButton } from "@mui/material";

const AppBar = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    loginWithRedirect();
  };

  return (
    <div className="flex flex-row p-3 border-b-2 border-blue-100">
      <div className="flex flex-row w-2/4 justify-start">
        <span className="my-auto font-medium text-blue-500">AppName</span>
      </div>
      <div className="flex flex-row justify-end w-full">
        <div className="mx-3">
          <IconButton>
            <DarkModeIcon color="primary" />
          </IconButton>
        </div>
        <div className="my-auto mx-3">
          <Button variant="text" color="primary" onClick={handleSignIn}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
