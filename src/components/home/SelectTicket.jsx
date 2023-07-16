import { useNavigate } from "react-router-dom";

export default function SelectTicket() {
  const navigate = useNavigate();
  return (
    <div className="relative -top-[10vh] mx-auto p-7 inset-0 bg-white rounded-md shadow-lg font-semibold">
      <p className="text-center">Tiket anda berhasil ditambahkan silahkan segera melakukan pembayaran</p>
      <p className="text-center">
        Klik{" "}
        <span
          className="font-bold cursor-pointer hover:text-pink-500 text-center"
          onClick={() => navigate("/myticket")}
        >
          Disini
        </span>
      </p>
    </div>
  );
}
