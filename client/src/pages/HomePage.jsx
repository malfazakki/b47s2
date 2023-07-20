import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FindTicket from "../components/home/FindTicket";
import Jumbotron from "../components/home/Jumbotron";
import TicketList from "../components/home/TicketList";
import Modal from "../components/modal/Modal";

import { ModalProvider } from "../context/ModalContext";
import { useState } from "react";

export default function HomePage() {
  const [searchCriteria, setSearchCriteria] = useState({
    date: "",
    startStation: "",
    destination: "",
  });

  const handleSearch = (date, startStation, destination) => {
    // Update the search criteria state with the form input values
    setSearchCriteria({
      date: date,
      startStation: startStation,
      destination: destination,
    });
  };

  return (
    <>
      <ModalProvider>
        <NavBar />
        <Modal />
        <div className="min-h-[89.3vh]">
          <Jumbotron />
          <FindTicket onSearch={handleSearch} />
          <TicketList
            date={searchCriteria.date}
            startStation={searchCriteria.startStation}
            destination={searchCriteria.destination}
          />
        </div>
        <Footer />
      </ModalProvider>
    </>
  );
}
