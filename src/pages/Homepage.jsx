import { useEffect, useState } from "react";
import imageHome from "../assets/imgHomepage.png";
import EventList from "../Lists/EventList";
import axios from "../api/axios";

function Homepage() {
  const [filter, setFilter] = useState({
    namaEvent: "",
    kategori: "",
    tanggal: "",
    lokasi: "",
  });
  const [listKategori, setlistKategori] = useState([]);

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`/categories/`)
        .then((res) => {
          setlistKategori([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
          setlistKategori([]);
        });
    }

    fetchData();
  }, []);

  return (
    <section className="h-[80vh]">
      <img
        src={imageHome}
        className="h-2/4 w-full object-cover object-center"
        alt="poster"
      />
      <div className="w-screen relative">
        <div className="bg-white w-full md:absolute mx-auto md:left-40 md:right-40 md:-top-12 md:rounded-lg md:w-fit ">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d"
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
                defaultValue={""}
                value={filter.kategori}
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setFilter({ ...filter, kategori: e.target.value });
                }}
              >
                <option value={""}>Pilih kategori</option>
                {listKategori.map((kategori) => (
                  <option key={kategori.category_id} value={kategori.name}>
                    {kategori.name}
                  </option>
                ))}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d"
                onChange={(e) => {
                  setFilter({ ...filter, lokasi: e.target.value });
                }}
                value={filter.lokasi}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="md:px-16 py-3 md:py-20 bg-gray-200">
        <EventList filter={filter} />
      </div>
    </section>
  );
}
export default Homepage;
