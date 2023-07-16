export default function AddTicketAdminForm() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mt-9 mb-9">Tambah Tiket</h1>
      <div>
        <form action="" className="w-[900px]">
          <input
            type="text"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full focus:border-pink-500 focus:outline-none focus:ring-pink-500"
            placeholder="Nama Kereta"
          />

          <select
            type="text"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 text-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
          >
            <option value="" hidden>
              Jenis Kereta
            </option>
            <option value="">Eksekutif (H)</option>
            <option value="">Ekonomi</option>
          </select>

          <input
            type="text"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
            placeholder="Tanggal Keberangkatan"
          />

          <input
            type="text"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
            placeholder="Stasiun Keberangkatan"
          />

          <input
            type="number"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
            placeholder="Jam Keberangkatan"
          />

          <input
            type="text"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
            placeholder="Stasiun Tujuan"
          />

          <input
            type="number"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
            placeholder="Jam Tiba "
          />

          <input
            type="number"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
            placeholder="Harga Tiket"
          />

          <input
            type="number"
            className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
            placeholder="Qty"
          />
        </form>
      </div>
      <button className="w-[335px] py-1 text-xl font-semibold text-white bg-green-400 rounded-md mt-[20px] hover:bg-green-500 mb-14">
        Save
      </button>
    </div>
  );
}
