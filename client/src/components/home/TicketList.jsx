/* eslint-disable react/prop-types */
import { useQuery } from "react-query";
import { API, setAuthToken } from "../../config/api";
import TicketListDetail from "./TicketListDetail";

export default function TicketList({ date, startStation, destination }) {
  setAuthToken(localStorage.token);

  const { data: tickets, isLoading } = useQuery(["tickets", date, startStation, destination], async () => {
    const queryString = `/ticket?date=${date}&startStation=${startStation}&destination=${destination}`;
    const response = await API.get(queryString);
    return response.data.data;
  });

  return (
    <>
      <div className="w-[79.7rem] mb-10 mx-auto">
        <div className="ml-[70px] grid grid-cols-[1fr_1fr_1fr_1fr_1.5fr_1.5fr]">{/* ... Grid header code ... */}</div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : tickets.length === 0 ? (
        <p className="text-center">No tickets match the search criteria.</p>
      ) : (
        tickets.map((ticket) => <TicketListDetail key={ticket.id} ticket={ticket} />)
      )}
    </>
  );
}
