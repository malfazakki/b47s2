/* eslint-disable react/prop-types */

import { useState } from "react";

export default function FindTicket({ onSearch }) {
  const [date, setDate] = useState("");
  const [startStation, setStartStation] = useState("");
  const [destination, setDestination] = useState("");

  const handleSearch = () => {
    onSearch(date, startStation, destination);
  };
  return (
    <div className="flex w-[76.25rem] ml-[10%] -mt-[3vh] rounded-md shadow-xl mb-[80px]">
      <div className="w-[17.75rem] h-[14.75rem] bg-[#f2f2f2] rounded-l-md ">
        <div className="flex items-center drop-shadow-md bg-white mt-3 py-1 border-l-[6px] border-orange-500">
          <img src="../src/assets/images/train.svg" alt="" />
          <p>Tiket Kereta Api</p>
        </div>
      </div>
      <div className="w-[58.5rem] h-[14.75rem] bg-white rounded-r-md px-5">
        <p className="text-2xl mt-1.5 mb-3">Tiket Kereta Api</p>
        <div className="flex">
          <div className="">
            <p className="font-bold mb-1 ">Asal</p>
            <input
              type="text"
              name="username"
              value={startStation}
              onChange={(e) => setStartStation(e.target.value)}
              className="w-[25rem] px-3 py-2 bg-white shadow-sm border-[3px] border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-4"
              placeholder="Jakarta"
            />
            <div className="flex w-[25rem] justify-between mb-1">
              <p className="font-bold">Tanggal Berangkat</p>
              <div>
                <input type="checkbox" />
                <p className="font-bold inline ml-1">Pulang Pergi</p>
              </div>
            </div>
            <input
              type="date"
              className="px-3 py-1 rounded-md border-[3px] border-slate-300 text-slate-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mx-5 mt-6">
            <img src="../src/assets/images/ellipse.svg" />
          </div>
          <div>
            <div className="">
              <p className="font-bold mb-1 ">Asal</p>
              <input
                type="text"
                name="username"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-[25rem] px-3 py-2 bg-white shadow-sm border-[3px] border-slate-300 placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500 block rounded-md sm:text-md focus:ring-1 mb-4"
                placeholder="Surabaya"
              />
              <div className="flex w-[25rem] justify-between mb-1">
                <div className="w-[7.25rem] ">
                  <label className="block font-bold mb-1">Dewasa</label>
                  <select className="w-full border-[3px] rounded-md py-1 border-slate-300 text-slate-400 ">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="w-[7.25rem] ">
                  <label className="block font-bold mb-1">Bayi</label>
                  <select className="w-full border-[3px] rounded-md py-1 border-slate-300 text-slate-400 ">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] rounded-lg cursor-pointer text-white font-semibold"
                    onClick={handleSearch}
                  >
                    Cari Tiket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
