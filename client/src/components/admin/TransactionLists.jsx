import TransactionListsAdmin from "./TransactionListsAdmin";
import { transactionListsData } from "../../dummy_data/TransactionListData";
import Modal from "../modal/Modal";

export default function TransactionLists() {
  return (
    <div className="mt-[60px] mx-auto mb-20">
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
        {transactionListsData.map((transaction, index) => (
          <TransactionListsAdmin transaction={transaction} key={transaction.Id} index={index} />
        ))}
        <Modal />
      </div>
    </div>
  );
}
