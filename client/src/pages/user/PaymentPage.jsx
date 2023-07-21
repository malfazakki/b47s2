/* eslint-disable no-unused-vars */
import MyTicketList from "../../components/my_ticket/MyTicketList";
import Modal from "../../components/modal/Modal";
import NavBar from "../../components/NavBar";

import { API, setAuthToken } from "../../config/api";
import { useQuery } from "react-query";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";

export default function PaymentPage() {
  const [state, dispatch] = useContext(UserContext);
  setAuthToken(localStorage.token);
  const { data: transactions, isLoading } = useQuery("transactionCache", async () => {
    const response = await API.get(`/user-transactions`);
    return response.data.data;
  });

  // Handle pendingTransactions when transactions is undefined or loading
  const pendingTransactions = transactions?.filter((transaction) => transaction.status == "pending");

  return (
    <>
      <NavBar />

      <div className="flex flex-col justify-center items-center gap-20 mb-20 mt-20">
        <h1 className="text-4xl w-[64.68rem] -ml-[98px]">Tiket Saya</h1>
        {pendingTransactions?.map((transaction, index) => (
          <MyTicketList transaction={transaction} key={index} />
        ))}
        <Modal />
      </div>
    </>
  );
}
