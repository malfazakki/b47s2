import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import AddTicketAdminForm from "../../components/admin/AddTicketAdminForm";
import Modal from "../../components/modal/Modal";

export default function AddTicketAdmin() {
  return (
    <>
      <NavBar />
      <Modal />
      <AddTicketAdminForm />
      <Footer />
    </>
  );
}
