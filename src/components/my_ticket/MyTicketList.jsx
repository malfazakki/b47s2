/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import MyTicketDetail from "../modal/MyTicketDetail";
import { UserContext } from "../../context/UserContext";
import { PaymentContext } from "../../context/PaymentContext";

export default function MyTicketList() {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const payment = useContext(PaymentContext);

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl w-[64.68rem] mb-[60px] -ml-[98px]">Tiket Saya</h1>
      <div
        className="mx-auto w-[64.68rem] h-[21.5rem] border-[1px]  border-[#b1b1b1] grid grid-cols-[50.18rem_1fr] rounded-lg overflow-hidden bg-white cursor-pointer hover:scale-[101%] hover:ring-2 hover:ring-pink-400 transitions duration-300"
        onClick={payment.isPaid ? () => openModal(<MyTicketDetail />) : null}
      >
        <div className="h-full">
          <div className=" h-[2.13rem]">
            <div className="w-[11.625rem] bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] h-full rounded-br-full pt-1.5">
              <img src="./landtick-logo-white.svg" alt="landtick" className="ml-[1.4rem]" />
            </div>
            <div className="h-[187px] w-full grid grid-cols-[193px_49px_155px_406px]">
              <div className="pl-[35px] pt-[32px] ">
                <p className="font-bold text-lg">Argo Willis</p>
                <p className="text-sm">Eksekutif (H)</p>
                {payment.isPaid ? (
                  <p className="py-1 px-3 text-sm text-green-500 inline-block bg-green-100 mt-3">Approved</p>
                ) : (
                  <p className="py-1 px-3 text-sm text-orange-500 inline-block bg-orange-100 mt-3">Pending</p>
                )}
              </div>
              <div className="flex items-center">
                <img src="../../src/assets/images/ellipse-hub.svg" alt="" />
              </div>
              <div className="pl-[10px] pt-[32px]">
                <p className="text-xl font-semibold">05.00</p>
                <p className="text-sm text-gray-400">21 Februari 2020</p>
                <p className="mt-6 text-xl font-semibold">10.00</p>
                <p className="text-sm text-gray-400">21 Februari 2020</p>
              </div>
              <div className="pl-[31px] pt-[32px]">
                <p className="text-xl font-semibold">Jakarta (GMR)</p>
                <p className="text-sm text-gray-400">Stasiun Gambir</p>
                <p className="mt-6 text-xl font-semibold">Surabaya</p>
                <p className="text-sm text-gray-400">Stasiun Surabaya</p>
              </div>
            </div>
            <div className="grid grid-cols-[226px_192px_187px_197px] pt-[27px] h-[61.5px] pl-[33px]">
              <p>No. Tanda Pengenal</p>
              <p>Nama Pemesan</p>
              <p>No. Handphone</p>
              <p className="">Email</p>
            </div>
            <hr className="w-[790px] border-0 h-px bg-[#b7b7b7] " />
            <div className="grid grid-cols-[226px_192px_187px_197px] pt-[8px] h-[61.5px] pl-[33px]">
              <p className="text-[#b1b1b1]">31175033003970001</p>
              <p className="text-[#b1b1b1]">Anto</p>
              <p className="text-[#b1b1b1]">083896833112</p>
              <p className="text-[#b1b1b1]">anto@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="h-full">
          <p className="text-right font-bold text-4xl mt-[.5rem] mr-[.94rem]">Kereta Api</p>
          <p className="text-right text-[#878787] mr-[.94rem]">
            <span className="font-bold">Saturday</span>, 21 February 2020
          </p>
          <div className="flex justify-end">
            <button
              className="h-[2.5rem] w-[12.875rem] bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] rounded-lg cursor-pointer text-white font-semibold mr-[.7rem] mt-[202px]"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/payment-user");
              }}
            >
              Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
