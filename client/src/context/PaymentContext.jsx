/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PaymentContext = createContext();

export const PaymentContextProvider = ({ children }) => {
  const [isPaid, setIsPaid] = useState(false);

  return <PaymentContext.Provider value={{ isPaid, setIsPaid }}>{children}</PaymentContext.Provider>;
};
