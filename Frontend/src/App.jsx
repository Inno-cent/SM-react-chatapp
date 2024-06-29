import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              authUser ? (
                // <div className="flex h-screen">
                //   <Left />
                //   <Right />
                // </div>
                <div className="drawer lg:drawer-open">
                  <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content flex flex-col items-center justify-center">
                    <Right />
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-2"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu w-80 min-h-full bg-black text-base-content">
                      <Left />
                    </ul>
                  </div>
                </div>
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
