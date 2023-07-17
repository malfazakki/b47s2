/* eslint-disable no-unused-vars */
import { useMutation } from "react-query";
import { useState } from "react";
import { API } from "../../config/api";
import { useModal } from "../../context/ModalContext";
import Login from "./Login";
import Alert from "../modal/Alert";

export default function Register() {
  const { openModal } = useModal();
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
  });

  const { full_name, username, email, password, gender, phone, address } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/register", form);

      console.log("register success : ", response);

      setMessage(alert("success"));
      setForm({
        full_name: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        address: "",
      });
      openModal(<Login />);
    } catch (error) {
      setMessage(alert("failed"));
      console.log("register failed : ", error);
    }
  });

  return (
    <div className="relative mx-auto bg-white rounded-md shadow-lg">
      <div className="flex">
        <div className="w-[26rem] h-[30rem] overflow-y-scroll m-auto flex flex-wrap justify-center items-center py-14 px-5 shadow-lg">
          <h1 className="text-5xl leading-normal bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] rounded-md text-transparent bg-clip-text font-semibold uppercase">
            Daftar
          </h1>
          <form className="mt-10 w-full" onSubmit={(e) => handleSubmit.mutate(e)}>
            <input
              type="text"
              name="full_name"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Nama Lengkap"
              value={full_name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <select
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 text-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              name="gender"
              value={gender}
              onChange={handleChange}
            >
              <option hidden>Jenis Kelamin</option>
              <option>Pria</option>
              <option>Wanita</option>70
            </select>
            <input
              type="text"
              name="phone"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Telp"
              value={phone}
              onChange={handleChange}
            />
            <textarea
              className="w-full h-40 resize-none px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Alamat"
              name="address"
              value={address}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="mt-5 mb-3 w-full py-1 bg-slate bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] rounded-full text-2xl text-white font-semibold focus:ring focus:ring-slate-300"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
