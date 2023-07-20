/* eslint-disable no-unused-vars */
import { ModalProvider } from "./context/ModalContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { setAuthToken, API } from "./config/api";
import { UserContext } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import MyTicketPage from "./pages/user/MyTicketPage";
import PaymentUser from "./pages/user/PaymentUser";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AddTicketAdmin from "./pages/admin/AddTicketAdmin";

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      // console.log("check user success : ", response);
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      // console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };
  return (
    <>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myticket" element={<MyTicketPage />} />
          <Route path="/payment-user/:id" element={<PaymentUser />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/addticket" element={<AddTicketAdmin />} />
        </Routes>
      </ModalProvider>
    </>
  );
}

export default App;
