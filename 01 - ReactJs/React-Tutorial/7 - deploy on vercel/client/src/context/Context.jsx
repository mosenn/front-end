import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo, name: "Mohsen" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
