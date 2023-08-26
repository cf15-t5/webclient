import { useState } from "react";
import EventList from "../Lists/EventList";
import CategoryDropdown from "../components/CategoryDropdown";

function Homepage() {
  const [filter, setFilter] = useState({
    namaEvent: "",
    kategori: "",
    tanggal: "",
    lokasi: "",
  });

  return (
    <section className="h-screen">
      <div className=" w-full h-3/4 relative">
        <img
          src="/icons/imgHomepage.png"
          className="h-full w-full object-cover object-center absolute brightness-75"
          alt="poster"
        />
        <div className="h-full text-center flex items-center justify-center relative">
          <h1 className="text-4xl mx-10 font-extrabold md:text-5xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
            SELAMAT DATANG DI SETIKET
          </h1>
        </div>
      </div>
      <div className="md:mx-20 md:-mt-14 relative shadow-lg">
        <div className="bg-white w-full rounded-lg">
          <form className="flex gap-5 p-5 flex-wrap md:flex-nowrap">
            <div className="flex-grow">
              <label
                htmlFor="nameEvent"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Event
              </label>
              <input
                type="text"
                id="nameEvent"
                className="input-field py-2"
                onChange={(e) => {
                  setFilter({ ...filter, namaEvent: e.target.value });
                }}
                value={filter.namaEvent}
              />
            </div>
            <div className="flex-grow">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Kategori
              </label>
              <select
                value={filter.kategori}
                id="location"
                className="input-field"
                onChange={(e) => {
                  setFilter({ ...filter, kategori: e.target.value });
                }}
              >
                <option value={""}>Pilih kategori</option>
                <CategoryDropdown isHomepage={true} />
              </select>
            </div>
            <div className="flex-grow">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tanggal
              </label>
              <input
                type="date"
                id="date"
                className="input-field py-2"
                onChange={(e) => {
                  setFilter({ ...filter, tanggal: e.target.value });
                }}
                value={filter.tanggal}
              />
            </div>
            <div className="flex-grow">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Lokasi
              </label>
              <input
                type="text"
                id="location"
                className="input-field py-2"
                onChange={(e) => {
                  setFilter({ ...filter, lokasi: e.target.value });
                }}
                value={filter.lokasi}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="md:px-16 py-3 mt-10 bg-gray-200">
        <EventList filter={filter} />
      </div>
    </section>
  );
}
export default Homepage;
