import NavBar from "../../components/NavBar";
import TransactionLists from "../../components/admin/TransactionLists";
import Footer from "../../components/Footer";

export default function AdminHomePage() {
  return (
    <>
      <NavBar />
      <TransactionLists />
      <Footer />
    </>
  );
}
