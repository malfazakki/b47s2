import { useModal } from "../../context/ModalContext";
import Login from "./Login";

export default function Register() {
  const { openModal } = useModal();

  return (
    <div className="relative mx-auto bg-white rounded-md shadow-lg">
      <div className="flex">
        <div className="w-[26rem] h-[30rem] overflow-y-scroll m-auto flex flex-wrap justify-center items-center py-14 px-5 shadow-lg">
          <h1 className="text-5xl leading-normal bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] rounded-md text-transparent bg-clip-text font-semibold uppercase">
            Daftar
          </h1>
          <form
            className="mt-10 w-full"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              name="nama-lengkap"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Nama Lengkap"
            />
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Username"
            />
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Password"
            />
            <select className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 text-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6">
              <option hidden>Jenis Kelamin</option>
              <option>Pria</option>
              <option>Wanita</option>
            </select>
            <input
              type="text"
              name="telp"
              className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Telp"
            />
            <textarea
              className="w-full h-40 resize-none px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-6"
              placeholder="Alamat"
            ></textarea>
            <button
              onSubmit={(e) => {
                e.preventDefault();
              }}
              type="button"
              className="mt-5 mb-3 w-full py-1 bg-slate bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] rounded-full text-2xl text-white font-semibold focus:ring focus:ring-slate-300"
              onClick={() => openModal(<Login />)}
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
