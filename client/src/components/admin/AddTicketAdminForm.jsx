/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "react-query";
import { API, setAuthToken } from "../../config/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTicketAdminForm() {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [form, setForm] = useState({
    name_train: "",
    type_train: "",
    start_date: "",
    start_station_id: "",
    start_time: "",
    destination_station_id: "",
    arrival_time: "",
    price: "",
    qty: "",
  });

  const {
    name_train,
    type_train,
    start_date,
    start_station,
    start_time,
    destination_station,
    arrival_time,
    price,
    qty,
  } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  setAuthToken(localStorage.token);

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const response = await API.post("/ticket", form);
      console.log("add ticket success : ", response);

      setMessage(alert("success"));
      setForm({
        name_train: "",
        type_train: "",
        start_date: "",
        start_station_id: "",
        start_time: "",
        destination_station_id: "",
        arrival_time: "",
        price: "",
        qty: "",
      });

      navigate("/admin");
    } catch (error) {
      console.log("add ticket failed : ", error);
      setMessage(alert("failed"));
    }
  });

  let { data: stations, isLoading } = useQuery("stationCache", async () => {
    const response = await API.get("/stations");
    return response.data.data.Stations;
  });

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mt-9 mb-9">Tambah Tiket</h1>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <form action="" className="w-[900px]" onSubmit={(e) => handleSubmit.mutate(e)}>
            <input
              type="text"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              placeholder="Nama Kereta"
              name="name_train"
              value={name_train}
              onChange={handleChange}
            />

            <select
              type="text"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 text-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              name="type_train"
              value={type_train}
              onChange={handleChange}
            >
              <option value="" hidden>
                Jenis Kereta
              </option>
              <option>Eksekutif (H)</option>
              <option>Ekonomi</option>
            </select>

            <input
              type="date"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              placeholder="Tanggal Keberangkatan"
              name="start_date"
              value={start_date}
              onChange={handleChange}
            />

            <select
              type="text"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              placeholder="Stasiun Keberangkatan"
              name="start_station_id"
              onChange={handleChange}
            >
              <option hidden value="">
                Stasiun Keberangkatan
              </option>
              {stations.map((station) => {
                return (
                  <option value={station?.id} key={station?.id}>
                    {station?.name}
                  </option>
                );
              })}
            </select>

            <input
              type="time"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              placeholder="Jam Keberangkatan"
              name="start_time"
              value={start_time}
              onChange={handleChange}
            />

            <select
              type="text"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              placeholder="Stasiun Tujuan"
              name="destination_station_id"
              onChange={handleChange}
            >
              <option hidden value="">
                Stasiun Tujuan
              </option>
              {stations.map((station) => (
                <option value={station?.id} key={station?.id}>
                  {station?.name}
                </option>
              ))}
            </select>

            <input
              type="time"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              placeholder="Jam Tiba"
              name="arrival_time"
              value={arrival_time}
              onChange={handleChange}
            />

            <input
              type="number"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              placeholder="Harga Tiket"
              name="price"
              value={price}
              onChange={handleChange}
            />

            <input
              type="number"
              className="px-3 py-1.5 border-slate-400 border-2 rounded-md text-md placeholder-slate-500 w-full mt-[15px] focus:border-pink-500 focus:outline-none focus:ring-pink-500"
              placeholder="Qty"
              name="qty"
              value={qty}
              onChange={handleChange}
            />
            <div className="flex justify-center">
              <button
                className="w-[335px] py-1 text-xl font-semibold text-white bg-green-400 rounded-md mt-[20px] hover:bg-green-500 mb-14"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
