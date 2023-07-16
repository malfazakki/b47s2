export default function EditTicketAdmin() {
  return (
    <div className="relative mx-auto bg-white rounded-md shadow-lg">
      <div className="w-[181px] h-[30px] rounded-br-full bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] flex pl-[30px]">
        <img src="/landtick-logo-white.svg" alt="landtick-wh" className="mt-[2px]" />
      </div>
      <div className="w-[26rem] h-[30rem] container m-auto flex flex-col justify-center items-center py-14 px-5 shadow-lg">
        <form className=" w-full scale-105">
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 bg-slate-300 shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-4"
            placeholder="1"
          />
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 bg-slate-300 shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-4"
            placeholder="Anto"
          />
          <input
            type="text"
            name="password"
            className="w-full px-3 py-2 bg-slate-300 shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-4"
            placeholder="Surabaya-Jakarta"
          />
          <select className="w-full px-3 py-2 bg-white shadow-sm border-2 border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-10">
            <option value="">Pending</option>
            <option value="">Approved</option>
          </select>
          <div className="flex justify-center">
            <button className="w-[50%] bg-green-500 py-2 rounded-md mx-auto">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
