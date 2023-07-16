/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { useModal } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";
import Register from "./Register";

export default function Login() {
  const { openModal, closeModal } = useModal();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();

    let status;
    if (username === "admin") {
      status = "admin";
    } else {
      status = "customer";
    }

    const data = { username, password, status };

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });

    closeModal();
  }

  return (
    <div className="relative mx-auto bg-white rounded-md shadow-lg">
      <div className="w-[26rem] h-[30rem] container m-auto flex flex-col justify-center items-center py-14 px-5 shadow-lg">
        <h1 className="text-5xl leading-normal bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] rounded-md text-transparent bg-clip-text font-semibold uppercase">
          Login
        </h1>
        <form className="mt-10 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-4"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-10"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}
