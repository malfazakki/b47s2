/* eslint-disable react/prop-types */
import { useModal } from "../../context/ModalContext";
import EditTicketAdmin from "./EditTicketAdmin";
import { useMutation } from "react-query";
import { API } from "../../config/api";

import TicketDetailAdmin from "./TicketDetailAdmin";

// Assets
import Search from "../../assets/images/search.svg";
import Edit from "../../assets/images/edit.svg";
import Delete from "../../assets/images/delete.svg";

export default function TransactionListsAdmin({ transaction, index, refetch }) {
  const { openModal } = useModal();
  const no = index + 1;

  const mutation = useMutation(async (id) => {
    try {
      await API.delete(`/transaction/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  function handleDelete(id) {
    const confirmation = window.confirm("Want to Delete? " + transaction.id + " " + transaction.user.full_name);
    if (confirmation) {
      mutation.mutate(id);
    }
  }

  return (
    <div
      className={`grid grid-cols-6  w-full min-h-[74px] max-h-[74px] pl-[15px] ${
        no % 2 !== 0 ? "border-y-2 border-slate-300 bg-[#f9f9f9]" : null
      }`}
    >
      <div className="flex items-center ml-1">
        <p>{no}</p>
      </div>
      <div className="flex items-center">
        <p>{transaction.user.full_name}</p>
      </div>
      <div className="flex items-center">
        <p>
          {transaction.ticket.start_station.name}-{transaction.ticket.destination_station.name}
        </p>
      </div>
      <div className="flex items-center font-medium text-orange-400 justify-center">
        <p>{transaction.status}</p>
      </div>
      <div className="flex items-center col-span-2 justify-center">
        <div className="flex gap-[28px]">
          <img
            onClick={() => {
              openModal(<TicketDetailAdmin id={transaction.id} />);
            }}
            src={Search}
            alt="search"
            className="cursor-pointer hover:scale-110"
          />
          <img
            onClick={() => {
              openModal(<EditTicketAdmin />);
            }}
            src={Edit}
            alt="search"
            className="cursor-pointer hover:scale-110"
          />
          <img
            onClick={() => handleDelete(transaction.id)}
            src={Delete}
            alt="search"
            className="cursor-pointer hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
