/* eslint-disable react/prop-types */
import { API, setAuthToken } from "../../config/api";
import { useQuery } from "react-query";

import FormatDate from "../FormatDateUtility";

// Assets
import EllipseHubLarge from "../../assets/images/ellipse-hub-large.svg";
import QRCode from "../../assets/images/qr-code.svg";

export default function TicketDetailAdmin({ id }) {
  setAuthToken(localStorage.token);
  let { data: transaction, isLoading } = useQuery("transactionsCache", async () => {
    const response = await API.get("/transaction/" + id);
    return response.data.data;
  });
  return (
    <>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <div className="relative mx-auto bg-white rounded-md scale-[75%]">
          <div className="w-[816px] h-[748px] ">
            <div className="">
              <div className="w-[181px] h-[30px] rounded-br-full bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] flex pl-[30px]">
                <img src="/landtick-logo-white.svg" alt="landtick-wh" className="mt-[2px]" />
              </div>
            </div>
            <div className="w-full h-[111px]">
              <div className="pt-[30px] pl-[52px]">
                <p className="text-5xl font-bold uppercase">Invoice</p>
                <p>Kode Invoice: INV0101</p>
              </div>
            </div>
            <div className="grid grid-cols-[514px_302px] h-[409px] w-full">
              <div className="h-full pl-[54px] pt-[32px]">
                <p className="text-left font-bold text-4xl mt-[.5rem] mr-[.94rem]">Kereta Api</p>
                <p className="text-left text-[#878787] mr-[.94rem]">
                  <span className="font-bold">{FormatDate(transaction.ticket?.start_date).Day}</span>,{" "}
                  {FormatDate(transaction.ticket?.start_date).formattedDate}
                </p>
                <p className="font-bold text-2xl mt-[37px]">{transaction?.ticket?.name_train}</p>
                <p className="text-sm">{transaction?.ticket?.type_train}</p>
                <div className="flex mt-[17px]">
                  <div className="flex items-center mr-[25px] ">
                    <img src={EllipseHubLarge} alt="" />
                  </div>
                  <div className="pl-[10px]">
                    <p className="text-lg font-semibold">{transaction?.ticket?.start_time}</p>
                    <p className="text-sm text-gray-400">{FormatDate(transaction.ticket?.start_date).formattedDate}</p>
                    <p className="text-lg font-semibold mt-[71px]">{transaction?.ticket?.arrival_time}</p>
                    <p className="text-sm text-gray-400">{FormatDate(transaction.ticket?.start_date).formattedDate}</p>
                  </div>
                  <div className="pl-[31px] ml-[74px]">
                    <p className="text-lg font-semibold">{transaction?.ticket?.start_station?.name}</p>
                    <p className="text-sm text-gray-400">Keberangkatan</p>
                    <p className="mt-[71px] text-lg font-semibold">{transaction?.ticket?.destination_station?.name}</p>
                    <p className="text-sm text-gray-400">Tujuan</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end pr-[82px] pt-[36px]">
                <img src={QRCode} alt="qr-code" className="h-[250px]" />
              </div>
            </div>
            <div className="h-[89px] w-[95%] gap-7 mx-auto px-5 border-y-2 border-slate-700 ">
              <div className="h-[104px] mx-auto ">
                <div className="grid grid-cols-4 pt-[15px] pl-[10px]">
                  <p>No. Tanda Pengenal</p>
                  <p>Nama Pemesan</p>
                  <p>No. Handphone</p>
                  <p className="">Email</p>
                </div>
                <div className="grid grid-cols-4 pt-[8px] pl-[10px]">
                  <p className="text-[#b1b1b1]">31175033003970001</p>
                  <p className="text-[#b1b1b1]">{transaction?.user?.full_name}</p>
                  <p className="text-[#b1b1b1]">{transaction?.user?.phone}</p>
                  <p className="text-[#b1b1b1]">{transaction?.user?.email}</p>
                </div>
              </div>
            </div>
            <div className="w-[95%] h-[76px] bg-[#e6e6e6] mx-auto mt-[18px] flex justify-between items-center p-[25px]">
              <p className="text-4xl font-bold">Total</p>
              <p className="text-4xl font-bold text-red-500">Rp. {transaction?.ticket?.price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
