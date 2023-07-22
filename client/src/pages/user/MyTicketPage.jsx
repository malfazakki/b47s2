/* eslint-disable no-unused-vars */
import MyTicketList from "../../components/my_ticket/MyTicketList";
import Modal from "../../components/modal/Modal";
import NavBar from "../../components/NavBar";

import { API, setAuthToken } from "../../config/api";
import { useQuery } from "react-query";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";

export default function MyTicketPage() {
  const [state, dispatch] = useContext(UserContext);
  setAuthToken(localStorage.token);
  let { data: transactions, isLoading } = useQuery("transactionMyTicketCache", async () => {
    const response = await API.get(`/user-transactions`);
    return response.data.data;
  });

  let approvedTransactions;

  approvedTransactions = transactions?.filter((element) => element.status == "approved");
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center gap-10 mb-20 mt-20">
        <h1 className="text-4xl w-[64.68rem] -ml-[98px] mb-5">Tiket Saya</h1>
        {approvedTransactions && approvedTransactions.length > 0 ? (
          approvedTransactions.map((transaction, index) => <MyTicketList transaction={transaction} key={index} />)
        ) : (
          <p>Start Buy Ticket or Complete the Payment...</p>
        )}
        <Modal />
      </div>
    </>
  );
}
