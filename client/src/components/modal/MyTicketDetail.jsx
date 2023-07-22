/* eslint-disable react/prop-types */
import FormatDate from "../../components/FormatDateUtility";

// Assets
import EllipseHubLarge from "../../assets/images/ellipse-hub-large.svg";
import QRCodeMyTicketDetail from "../../assets/images/qr-code-myticketdetail.svg";
import Contact from "../../assets/images/contact.svg";
import Clock from "../../assets/images/clock.svg";
import Warning from "../../assets/images/warning.svg";

export default function MyTicketDetail({ transaction }) {
  return (
    <div className="flex items-center mx-auto scale-[90%]">
      <div className="relative mx-auto bg-white rounded-md scale-90">
        <div className="w-[816px] h-[748px] ">
          <div className="grid grid-cols-[514px_1fr] w-full h-[147px]">
            <div className="pt-[26px] pl-[52px]">
              <p className="text-5xl font-bold">E-Ticket</p>
              <p>Kode Invoice: INV0101</p>
            </div>
            <div className="flex justify-end pt-[26px]">
              <div className="w-[297px] h-[61px] rounded-bl-full bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] flex justify-end pr-[10px]">
                <img src="/landtick-logo-white.svg" alt="landtick-wh" className="scale-90 mt-2 mr-2" />
              </div>
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
            <div className="flex justify-end pr-[79px] pt-[65px]">
              <img src={QRCodeMyTicketDetail} alt="qr-code" className="h-[250px]" />
            </div>
          </div>
          <div className="grid grid-cols-3 h-[89px] w-[95%] gap-7 mx-auto px-5 border-y-2 border-slate-700 ">
            <div className="flex items-center justify-center gap-3">
              <img src={Contact} />
              <p className="text-[13px]">Tunjukkan e-ticket dan identitas para penumpang saat checkin</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src={Clock} />
              <p className="text-[13px]">
                Check-in <span className="font-bold">paling lambat 90 menit</span> sebelum keberangkatan
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src={Warning} />
              <p className="text-[13px]">Waktu tertera adalah waktu stasiun setempat</p>
            </div>
          </div>
          <div className="h-[104px] mx-auto ">
            <div className="grid grid-cols-4 pt-[20px] pl-[33px]">
              <p>No. Tanda Pengenal</p>
              <p>Nama Pemesan</p>
              <p>No. Handphone</p>
              <p className="">Email</p>
            </div>
            <div className="grid grid-cols-4 pt-[8px] pl-[33px]">
              <p className="text-[#b1b1b1]">31175033003970001</p>
              <p className="text-[#b1b1b1]">{transaction?.user?.full_name}</p>
              <p className="text-[#b1b1b1]">{transaction?.user?.phone}</p>
              <p className="text-[#b1b1b1]">{transaction?.user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
