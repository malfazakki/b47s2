import MyTicketList from "../../components/my_ticket/MyTicketList";
import Modal from "../../components/modal/Modal";
import NavBar from "../../components/NavBar";

export default function MyTicketPage() {
  return (
    <>
      <NavBar />
      <MyTicketList />
      <Modal />
    </>
  );
}
