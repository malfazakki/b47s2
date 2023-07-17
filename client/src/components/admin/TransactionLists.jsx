import { API, setAuthToken } from "../../config/api";
import { useQuery } from "react-query";

import TransactionListsAdmin from "./TransactionListsAdmin";
import Modal from "../modal/Modal";

export default function TransactionLists() {
  setAuthToken(localStorage.token);
  let { data: transactions, isLoading } = useQuery("transactionsCache", async () => {
    const response = await API.get("/transactions");
    return response.data.data;
  });

  return (
    <div className="mt-[60px] mx-auto mb-20 min-h-[68vh]">
      <h1 className="text-4xl font-semibold w-[1266px] mx-auto mb-[34px]">List Transaksi</h1>
      <div className="w-[1266px] grid mx-auto mt-20">
        <div className="grid grid-cols-6 w-full pl-[15px] font-bold mb-10">
          <div className="flex items-center">
            <p>No</p>
          </div>
          <div className="flex items-center">
            <p>Users</p>
          </div>
          <div className="flex items-center">
            <p>Tiket</p>
          </div>
          <div className="flex items-center justify-center">
            <p>Status Payment</p>
          </div>
          <div className="flex items-center col-span-2 justify-center">
            <p>Action</p>
          </div>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          transactions.map((transaction, index) => (
            <TransactionListsAdmin transaction={transaction} key={transaction.id} index={index} />
          ))
        )}
        <Modal />
      </div>
    </div>
  );
}
