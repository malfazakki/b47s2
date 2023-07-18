import TicketListDetail from "./TicketListDetail";

import { API, setAuthToken } from "../../config/api";
import { useQuery } from "react-query";

export default function TicketList() {
  setAuthToken(localStorage.token);
  let { data: tickets, isLoading } = useQuery("ticketsCache", async () => {
    const response = await API.get("/tickets");
    return response.data.data;
  });
  return (
    <>
      <div className="w-[79.7rem] mb-10 mx-auto">
        <div className="ml-[70px] grid grid-cols-[1fr_1fr_1fr_1fr_1.5fr_1.5fr]">
          <div className="flex-row items-center justify-center">
            <p>Nama Kereta</p>
          </div>
          <div className="flex-row items-center justify-center text-center">
            <p className="ml-5">Berangkat</p>
          </div>
          <div className="flex items-center justify-center">
            <p></p>
          </div>
          <div className="flex-row items-center justify-center text-center">
            <p className="ml-1">Tiba</p>
          </div>
          <div className="flex items-center justify-center text-center">
            <p className="ml-2">Durasi</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-center">Harga per Orang</p>
          </div>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="list">
          {tickets.map((ticket) => (
            <TicketListDetail ticket={ticket} key={ticket.id} />
          ))}
        </div>
      )}
    </>
  );
}
