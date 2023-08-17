import { useState, createContext } from "react";
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const storeToken = localStorage.getItem('token');
  const storeEmail = localStorage.getItem('email');
  const [Auth, setisAuth] = useState(storeToken !== null);
  const [token, setToken] = useState(storeToken || "");
  const [email, setEmail] = useState(storeEmail || "");
  const [loading,setLoading] = useState(false)
  const [response,setResponse] = useState(false)

  const handleLogin = (token) => {
    setisAuth(true);
    setToken(token);
  };
  const handleLogout = () => {
    setisAuth(false);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const contextValue = { 
    Auth,
    token,
    loading,
    response,
    email,
    setLoading,
    handleLogin,
    setResponse,
    handleLogout,
    setisAuth,
    setEmail
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
