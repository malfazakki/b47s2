/* eslint-disable no-unused-vars */
import { ModalProvider } from "./context/ModalContext";
import { UserContextProvider } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyTicketPage from "./pages/user/TicketPage";
import PaymentUser from "./pages/user/PaymentUser";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AddTicketAdmin from "./pages/admin/AddTicketAdmin";

function App() {
  return (
    <>
      <UserContextProvider>
        <ModalProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/myticket" element={<MyTicketPage />} />
              <Route path="/payment-user" element={<PaymentUser />} />
              <Route path="/admin" element={<AdminHomePage />} />
              <Route path="/addticket" element={<AddTicketAdmin />} />
            </Routes>
          </Router>
        </ModalProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
