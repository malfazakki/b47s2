export default function Jumbotron() {
  return (
    <div className="h-[18.75rem] bg-gradient-to-r from-[#EC7AB7] to-[#EC7A7A] flex-shrink-0">
      <div className="w-4/5 mx-auto pt-14 flex justify-between flex-shrink-0">
        <div className="flex-shrink-0">
          <h1 className="text-white font-semibold text-4xl mb-5">Selamat Pagi, Ticket Seekers!</h1>
          <p className="text-white ml-2 text-2xl font-light">Ingin Pulkam dengan Good Deal?</p>
          <p className="text-white ml-2 text-2xl font-light">Masuk atau Daftar Sekarang!!</p>
        </div>
        <div className="flex flex-wrap justify-end relative mr-14 -mt-7 flex-shrink-0">
          <img src="../src/assets/images/portal-2.png" alt="ads" className="min-w-[31.25rem]" />
          <img src="../src/assets/images/portal-1.png" alt="ads" className="absolute -top-2 -left-4 min-w-[31.25rem]" />
        </div>
      </div>
    </div>
  );
}
