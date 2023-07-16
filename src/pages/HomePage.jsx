import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FindTicket from "../components/home/FindTicket";
import Jumbotron from "../components/home/Jumbotron";
import TicketList from "../components/home/TicketList";
import Modal from "../components/modal/Modal";

import { ModalProvider } from "../context/ModalContext";

export default function HomePage() {
  return (
    <>
      <ModalProvider>
        <NavBar />
        <Modal />
        <Jumbotron />
        <FindTicket />
        <TicketList />
        <Footer />
      </ModalProvider>
    </>
  );
}
