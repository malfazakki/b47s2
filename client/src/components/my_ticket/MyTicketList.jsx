/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import MyTicketDetail from "../modal/MyTicketDetail";
import FormatDate from "../FormatDateUtility";

// Assets
import EllipseHub from "../../assets/images/ellipse-hub.svg";
import QRCodeMyTicketDetail from "../../assets/images/qr-code-myticketdetail.svg";

export default function MyTicketList({ transaction }) {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  if (!transaction) {
    return null;
  }

  return (
    <div
      className="mx-auto w-[64.68rem] h-[21.5rem] border-[1px]  border-[#b1b1b1] grid grid-cols-[50.18rem_1fr] rounded-lg overflow-hidden bg-white cursor-pointer scale-[95%] hover:scale-[96%] hover:ring-2 hover:ring-pink-400 hover:shadow-xl transitions duration-200"
      onClick={transaction.status === "approved" ? () => openModal(<MyTicketDetail transaction={transaction} />) : null}
    >
      <div className="h-full">
        <div className=" h-[2.13rem]">
          <div className="w-[11.625rem] bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] h-full rounded-br-full pt-1.5">
            <img src="./landtick-logo-white.svg" alt="landtick" className="ml-[1.4rem]" />
          </div>
          <div className="h-[187px] w-full grid grid-cols-[193px_49px_155px_406px]">
            <div className="pl-[35px] pt-[32px] ">
              <p className="font-bold text-lg">{transaction.ticket?.name_train}</p>
              <p className="text-sm">{transaction.ticket?.type_train}</p>
              {transaction.status === "approved" ? (
                <p className="py-1 px-3 text-sm text-green-500 inline-block bg-green-100 mt-3">Approved</p>
              ) : (
                <p className="py-1 px-3 text-sm text-orange-500 inline-block bg-orange-100 mt-3">Pending</p>
              )}
            </div>
            <div className="flex items-center">
              <img src={EllipseHub} alt="" />
            </div>
            <div className="pl-[10px] pt-[32px]">
              <p className="text-xl font-semibold">{transaction.ticket?.start_time}</p>
              <p className="text-sm text-gray-400">{FormatDate(transaction.ticket?.start_date).formattedDate}</p>
              <p className="mt-6 text-xl font-semibold">{transaction.ticket?.arrival_time}</p>
              <p className="text-sm text-gray-400">{FormatDate(transaction.ticket?.start_date).formattedDate}</p>
            </div>
            <div className="pl-[31px] pt-[32px]">
              <p className="text-xl font-semibold">{transaction.ticket?.start_station.name}</p>
              <p className="text-sm text-gray-400">Keberangkatan</p>
              <p className="mt-6 text-xl font-semibold">{transaction.ticket?.destination_station.name}</p>
              <p className="text-sm text-gray-400">Tujuan</p>
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
            <p className="text-[#b1b1b1]">{transaction?.user?.full_name}</p>
            <p className="text-[#b1b1b1]">{transaction.user?.phone}</p>
            <p className="text-[#b1b1b1]">{transaction?.user?.email}</p>
          </div>
        </div>
      </div>
      <div className="h-full">
        <p className="text-right font-bold text-4xl mt-[.5rem] mr-[.94rem]">Kereta Api</p>
        <p className="text-right text-[#878787] mr-[.94rem]">
          <span className="font-bold">{FormatDate(transaction.ticket?.start_date).Day}</span>,{" "}
          {FormatDate(transaction.ticket?.start_date).formattedDate}
        </p>
        <div className="flex justify-end">
          {transaction.status === "pending" ? (
            <button
              className="h-[2.5rem] w-[12.875rem] bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] rounded-lg cursor-pointer text-white font-semibold mr-[.7rem] mt-[202px]"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/payment-user/${transaction?.id}`);
              }}
            >
              Bayar Sekarang
            </button>
          ) : (
            <img src={QRCodeMyTicketDetail} alt="qr-code" className="h-[180px] mr-9 mt-10" />
          )}
        </div>
      </div>
    </div>
  );
}
