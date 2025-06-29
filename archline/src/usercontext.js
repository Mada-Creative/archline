import React, { createContext, useContext, useState } from "react";

// إنشاء سياق المستخدم
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

// Custom Hook لاستخدام السياق بسهولة
export const useUser = () => useContext(UserContext);
