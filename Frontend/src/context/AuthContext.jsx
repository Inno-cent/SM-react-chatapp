import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is already logged in (e.g., check localStorage or a session)
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const signup = async (fullname, email, password, confirmPassword) => {
//     try {
//       const response = await axios.post("/api/user/signup", {
//         email,
//         password,
//         fullname,
//         confirmPassword,
//       });
//       setUser(response.data.user);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//     } catch (error) {
//       console.error("Signup error:", error);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post("/api/user/login", { email, password });
//       setUser(response.data.user);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthProvider, AuthContext };

export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatApp");

  // parse the user data and storing in state.
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
