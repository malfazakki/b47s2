/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useModal } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import Login from "./modal/Login";
import Register from "./modal/Register";

export default function NavBar() {
  const { openModal } = useModal();
  const [state, dispatch] = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);
  const { user, isLogin } = state;
  const { username, role, id } = user;

  const navigate = useNavigate();

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    setDropdown(false);
    navigate("/");
  };

  return (
    <nav className="bg-white h-[60px] w-full py-2 shadow-xl flex items-center flex-shrink-0 sticky top-0 z-20">
      <div className="w-4/5 flex justify-between mx-auto flex-shrink-0">
        <div className="flex items-center flex-shrink-0">
          <img
            className="mt-2 scale-90 cursor-pointer hover:scale-[85%] transition-transform duration-300"
            src="/landtick-full-logo.svg"
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>

        {isLogin ? (
          <div className="flex items-center box-border flex-shrink-0">
            <div>
              <div
                className="flex gap-[12px] items-center hover:scale-90 cursor-pointer transition-transform duration-500"
                onClick={handleDropdown}
              >
                <h1 className="text-xl leading-normal bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] rounded-md text-transparent bg-clip-text font-bold cursor-pointer select-none capitalize">
                  {username}
                </h1>{" "}
                <img src="../src/assets/images/avatar.svg" className=" cursor-pointer" />
              </div>
              {role === "admin" ? (
                <div
                  id="dropdown"
                  className={` ${
                    dropdown ? "" : "hidden"
                  }  bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-[200px] fixed top-[65px] right-[10%]`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link to="/addticket" className="flex items-center gap-3 py-2 hover:bg-gray-100  px-6">
                        <img src="../src/assets/images/add-ticket.svg" alt="" className=" scale-75" />{" "}
                        <span className="text-pink-400 text-lg font-semibold">Add Ticket</span>
                      </Link>
                    </li>
                    <li className="border-t-4 border-pink-300" onClick={logout}>
                      <Link className="flex items-center gap-3 py-2 hover:bg-gray-100 px-6">
                        <img src="../src/assets/images/logo.svg" className="scale-75" alt="" />{" "}
                        <span className="text-pink-400 text-lg font-semibold">Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div
                  id="dropdown"
                  className={` ${
                    dropdown ? "" : "hidden"
                  }  bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-[200px] fixed top-[65px] right-[10%]`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link to="/myticket" className="flex items-center gap-3 py-2 hover:bg-gray-100  px-6">
                        <img src="../src/assets/images/my_ticket.svg" alt="" />{" "}
                        <span className="text-pink-400 text-lg font-semibold">My Ticket</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/payment-user" className="flex items-center gap-3 py-2 hover:bg-gray-100 px-6 pb-3">
                        <img src="../src/assets/images/payment.svg" alt="" />{" "}
                        <span className="text-pink-400 text-lg font-semibold">Payment</span>
                      </Link>
                    </li>
                    <li className="border-t-4 border-pink-300" onClick={logout}>
                      <Link className="flex items-center gap-3 py-2 hover:bg-gray-100 px-6">
                        <img src="../src/assets/images/logo.svg" className="scale-75" alt="" />{" "}
                        <span className="text-pink-400 text-lg font-semibold">Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center box-border flex-shrink-0">
              <button
                className="px-6 py-2 bg-gradient-to-r from-[#ec7ab7] to-[#ec7a7a] rounded-md hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] text-white font-semibold duration-300 mr-[30px]"
                onClick={() => openModal(<Login />)}
              >
                Masuk
              </button>
              <button
                type="button"
                className="px-6 py-2 ring-1 ring-pink-600 rounded-md text-pink-500 hover:border-0 hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] hover:text-white font-semibold mr-6"
                onClick={() => openModal(<Register />)}
              >
                Daftar
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
