import { API, setAuthToken } from "../../config/api";
import { useQuery } from "react-query";

import TransactionListsAdmin from "./TransactionListsAdmin";
import Modal from "../modal/Modal";

export default function TransactionLists() {
  setAuthToken(localStorage.token);
  let {
    data: transactions,
    isLoading,
    refetch,
  } = useQuery("transactionsCache", async () => {
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
          <div className="flex items-center ml-3">
            <p>Users</p>
          </div>
          <div className="flex items-center ml-10">
            <p>Tiket</p>
          </div>
          <div className="flex items-center justify-center ml-3">
            <p>Status Payment</p>
          </div>
          <div className="flex items-center col-span-2 justify-center">
            <p>Action</p>
          </div>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : transactions && transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <TransactionListsAdmin transaction={transaction} key={transaction.id} index={index} refetch={refetch} />
          ))
        ) : (
          <p>No transactions found.</p>
        )}
        <Modal refetch={refetch} />
      </div>
    </div>
  );
}
