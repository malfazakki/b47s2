/* eslint-disable react/prop-types */
import { useModal } from "../../context/ModalContext";
import EditTicketAdmin from "./EditTicketAdmin";

import TicketDetailAdmin from "./TicketDetailAdmin";

export default function TransactionListsAdmin({ transaction, index }) {
  const { openModal } = useModal();
  const no = index + 1;

  return (
    <div
      className={`grid grid-cols-6  w-full min-h-[74px] max-h-[74px] pl-[15px] ${
        no % 2 !== 0 ? "border-y-2 border-slate-300 bg-[#f9f9f9]" : null
      }`}
    >
      <div className="flex items-center">
        <p>{no}</p>
      </div>
      <div className="flex items-center">
        <p>{transaction.Name}</p>
      </div>
      <div className="flex items-center">
        <p>{transaction.Ticket}</p>
      </div>
      <div className="flex items-center font-medium text-orange-400 justify-center">
        <p>{transaction.Status}</p>
      </div>
      <div className="flex items-center col-span-2 justify-center">
        <div className="flex gap-[28px]">
          <img
            onClick={() => {
              openModal(<TicketDetailAdmin />);
            }}
            src="../src/assets/images/search.svg"
            alt="search"
            className="cursor-pointer hover:scale-110"
          />
          <img
            onClick={() => {
              openModal(<EditTicketAdmin />);
            }}
            src="../src/assets/images/edit.svg"
            alt="search"
            className="cursor-pointer hover:scale-110"
          />
          <img
            onClick={null}
            src="../src/assets/images/delete.svg"
            alt="search"
            className="cursor-pointer hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
