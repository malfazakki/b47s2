/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { API, setAuthToken } from "../config/api";
import { useQuery } from "react-query";

export const PaymentContext = createContext();

export const PaymentContextProvider = ({ children }) => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [idTransaction, setIdTransaction] = useState(null);

  setAuthToken(localStorage.token);
  const { data: transactions, isLoading } = useQuery("transactionCache", async () => {
    const response = await API.get(`/transactions`);
    return response.data.data;
  });

  useEffect(() => {
    if (!isLoading && transactions) {
      if (idTransaction) {
        setFilteredTransactions(transactions.filter((transaction) => transaction.id === idTransaction));
      } else {
        setFilteredTransactions(transactions);
      }
    }
  }, [isLoading, transactions, idTransaction]);

  return (
    <PaymentContext.Provider value={{ transactions: filteredTransactions, isLoading, idTransaction, setIdTransaction }}>
      {children}
    </PaymentContext.Provider>
  );
};
