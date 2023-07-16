export default function MyTicketDetail() {
  return (
    <div className="flex items-center min-h-screen mx-auto">
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
                <span className="font-bold">Saturday</span>, 21 February 2020
              </p>
              <p className="font-bold text-2xl mt-[37px]">Argo Willis</p>
              <p className="text-sm">Eksekutif (H)</p>
              <div className="flex mt-[17px]">
                <div className="flex items-center mr-[25px] ">
                  <img src="../../src/assets/images/ellipse-hub-large.svg" alt="" />
                </div>
                <div className="pl-[10px]">
                  <p className="text-lg font-semibold">05.00</p>
                  <p className="text-sm text-gray-400">21 Februari 2020</p>
                  <p className="text-lg font-semibold mt-[71px]">10.05</p>
                  <p className="text-sm text-gray-400">21 Februari 2020</p>
                </div>
                <div className="pl-[31px] ml-[74px]">
                  <p className="text-lg font-semibold">Jakarta (GMR)</p>
                  <p className="text-sm text-gray-400">Stasiun Gambir</p>
                  <p className="mt-[71px] text-lg font-semibold">Surabaya</p>
                  <p className="text-sm text-gray-400">Stasiun Surabaya</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end pr-[79px] pt-[65px]">
              <img src="../../src/assets/images/qr-code-myticketdetail.svg" alt="qr-code" className="h-[250px]" />
            </div>
          </div>
          <div className="grid grid-cols-3 h-[89px] w-[95%] gap-7 mx-auto px-5 border-y-2 border-slate-700 ">
            <div className="flex items-center justify-center gap-3">
              <img src="../../src/assets/images/contact.svg" />
              <p className="text-[13px]">Tunjukkan e-ticket dan identitas para penumpang saat checkin</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src="../../src/assets/images/clock.svg" />
              <p className="text-[13px]">
                Check-in <span className="font-bold">paling lambat 90 menit</span> sebelum keberangkatan
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src="../../src/assets/images/warning.svg" />
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
              <p className="text-[#b1b1b1]">Anto</p>
              <p className="text-[#b1b1b1]">083896833112</p>
              <p className="text-[#b1b1b1]">anto@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
