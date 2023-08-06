/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { useModal } from "../../context/ModalContext";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { API, setAuthToken } from "../../config/api";
import Register from "./Register";
import Alert from "./Alert";
import Modal from "./Modal";

export default function Login() {
  let navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const [_, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/login", form);

      // console.log("login success : ", response);
      // alert("success login");

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });

      setAuthToken(localStorage.token);
      alert("login success");
      // openModal(<Alert />);

      if (response.data.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      // setMessage(alert);
      alert("login failed");
      console.log("login failed : ", error);
    }

    closeModal();
  });

  return (
    <div className="relative mx-auto bg-white rounded-md shadow-lg">
      <div className="w-[26rem] h-[30rem] container m-auto flex flex-col justify-center items-center py-14 px-5 shadow-lg">
        <h1 className="text-5xl leading-normal bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] rounded-md text-transparent bg-clip-text font-semibold uppercase">
          Login
        </h1>
        <form className="mt-10 w-full" onSubmit={(e) => handleSubmit.mutate(e)}>
          <input
            type="email"
            className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-4"
            placeholder="Email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-10"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
          <button className="w-full py-1 bg-slate bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] rounded-full text-2xl text-white font-semibold focus:ring focus:ring-slate-300">
            Login
          </button>
        </form>
        <p className="w-full text-center mt-3 text-sm text-slate-400">
          Belum Punya Akun? Klik{" "}
          <b
            className="font-semibold text-pink-400 hover:text-pink-700 cursor-pointer"
            onClick={() => openModal(<Register />)}
          >
            Disini
          </b>
        </p>
      </div>
      {/* <Modal /> */}
    </div>
  );
}
