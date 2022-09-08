import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { logout, loginWithRedirect, user } = useAuth0();

  const [myUser, setMyUser] = useState(false);

  useEffect(() => {
    // if (isAuthenticated) {
    //   setMyUser(true);
    // } else {
    //   setMyUser(false);
    // }
    setMyUser(user);
  }, [user]);

  // console.log("my User", myUser);
  // console.log(user);
  // console.log("isAuthenticated", isAuthenticated);

  return (
    <UserContext.Provider value={{ logout, loginWithRedirect, myUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
