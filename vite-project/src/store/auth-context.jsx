import { createContext } from "react";

const AuthContext = createContext({
  loggedIn: false,
  changeTheme: true,
});

export default AuthContext;
