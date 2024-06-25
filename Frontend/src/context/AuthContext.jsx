// import React, { createContext, useContext, useState } from "react";
// import Cookies from "js-cookie";
// export const AuthContext = createContext();




// export const AuthProvider = ({ children }) => {
//   const initialUserState =
//     Cookies.get("jwt") || localStorage.getItem("ChatApp");

//   // parse the user data and storing in state.
//   const [authUser, setAuthUser] = useState(
//     initialUserState ? JSON.parse(initialUserState) : undefined
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// // export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext(null);

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
