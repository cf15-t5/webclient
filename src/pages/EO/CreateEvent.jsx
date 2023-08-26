import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { toast } from "react-hot-toast";
import {
  ProvinceData,
  CityData,
  SubdistrictData,
} from "../../api/IndonesianData";
import { capitalizeFirstLetter } from "../../utils/stringProcess";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    date: "",
    ticket: "",
    poster: "",
    address: {
      idProvince: "",
      idCity: "",
      idSub: "",
      detail: "",
    },
    category: "",
  });

  const getName = (data, id) => {
    const name = data.find((item) => item.id === id)?.name;
    return capitalizeFirstLetter(name);
  };

  const provName = getName(ProvinceData(), data.address["idProvince"]);
  const cityName = getName(
    CityData(data.address["idProvince"]),
    data.address["idCity"]
  );
  const subName = getName(
    SubdistrictData(data.address["idCity"]),
    data.address["idSub"]
  );

  const formattedAddress = `${data.address["detail"]}, ${subName}, ${cityName}, ${provName}`;

  const handleChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddressChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [field]: value,
      },
    }));
  };

  useEffect(() => {
    axios
      .get("/categories/")
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("price", data.price);
  formData.append("description", data.description);
  formData.append("date_of_event", data.date);
  formData.append("number_of_ticket", data.ticket);
  formData.append("address", formattedAddress);
  formData.append("poster", data.poster);
  formData.append("category_id", data.category);

  async function submitCreateEvent(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post("/events/", formData)
      .then((res) => {})
      .then(() => {
        toast.success("Event Berhasil dibuat");
        navigate("/myEvent");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error("Gagal Membuat Event");
      })
      .finally(() => setLoading(false));
  }
  return (
    <section className="p-3 mx-5">
      <h5 className="text-xl border-b-2 border-gray-300">Buat Event</h5>
      <div className="bg-white mt-5 md:mx-20 rounded-xl">
        <form
          onSubmit={submitCreateEvent}
          className=" p-10 md:px-20 flex flex-col"
        >
          <div className="space-y-5">
            <div className="items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-300 bg-gray-100 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {data.poster ? (
                    <div>
                      <h1>Berhasil Upload</h1>
                      <h2 className="text-sm text-gray-600">File Details:</h2>
                      <p className="text-xs text-gray-500">
                        File Name: {data.poster.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        File Type: {data.poster.type}
                      </p>
                      <p className="text-xs text-gray-500">
                        Last Modified:{" "}
                        {data.poster.lastModifiedDate.toDateString()}
                      </p>
                    </div>
                  ) : (
                    <>
                      <img src="/icons/IconFileUp.svg" alt="icon" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG</p>
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    handleChange("poster", e.target.files[0]);
                  }}
                />
              </label>
            </div>
            <div>
              <label for="eventName" className="block mb-2 text-sm font-medium">
                Nama Event
              </label>
              <input
                id="eventName"
                type="text"
                placeholder="Nama Event"
                className="input-field"
                onChange={(e) => handleChange("title", e.target.value)}
                required
              />
            </div>
            <div>
              <label for="category" className="block mb-2 text-sm font-medium">
                Pilih Kategori
              </label>
              <select
                id="category"
                className="input-field"
                onChange={(e) => {
                  handleChange("category", e.target.value);
                }}
                required
              >
                <option value={null}>Pilih kategori</option>
                {category.map((item) => {
                  return (
                    <option key={item.category_id} value={item.category_id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label for="province" className="block mb-2 text-sm font-medium">
                Provinsi
              </label>
              <select
                id="province"
                className="input-field"
                onChange={(e) =>
                  handleAddressChange("idProvince", e.target.value)
                }
                required
              >
                <option value={""}>Pilih Provinsi</option>
                {ProvinceData().map((prov) => {
                  return (
                    <option key={prov.id} value={prov.id}>
                      {prov.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label for="city" className="block mb-2 text-sm font-medium">
                Kota
              </label>
              <select
                id="city"
                className="input-field"
                onChange={(e) => {
                  handleAddressChange("idCity", e.target.value);
                }}
                required
              >
                <option value={null}>Pilih kota</option>
                {CityData(data.address["idProvince"]).map((city) => {
                  return (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                for="subdistrict"
                className="block mb-2 text-sm font-medium"
              >
                Kecamatan
              </label>
              <select
                id="subdistrict"
                className="input-field"
                onChange={(e) => {
                  handleAddressChange("idSub", e.target.value);
                }}
                required
              >
                <option value={null}>Pilih kecamatan</option>
                {SubdistrictData(data.address["idCity"]).map((sub) => {
                  return (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                for="detailAddress"
                className="block mb-2 text-sm font-medium"
              >
                Alamat Detail
              </label>
              <input
                id="detailAddress"
                type="text"
                placeholder="Alamat Detail"
                className="input-field"
                onChange={(e) => {
                  handleAddressChange("detail", e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label for="eventDate" className="block mb-2 text-sm font-medium">
                Tanggal
              </label>
              <input
                id="eventDate"
                type="date"
                placeholder="Tanggal Event"
                className="input-field"
                onChange={(e) => {
                  handleChange("date", e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label
                for="eventPrice"
                className="block mb-2 text-sm font-medium"
              >
                Harga
              </label>
              <input
                id="eventPrive"
                type="number"
                placeholder="Harga"
                className="input-field"
                onChange={(e) => {
                  handleChange("price", e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label for="ticket" className="block mb-2 text-sm font-medium">
                Jumlah Tiket
              </label>
              <input
                id="ticket"
                type="number"
                placeholder="Jumlah Tiket"
                className="input-field"
                onChange={(e) => {
                  handleChange("ticket", e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label
                for="description"
                className="block mb-2 text-sm font-medium"
              >
                Deskirpsi
              </label>
              <textarea
                id="description"
                rows="4"
                className="input-field "
                placeholder="Deskipsi Event"
                onChange={(e) => {
                  handleChange("description", e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="self-end">
            <button type="submit" className="mt-9 btn-primary">
              {loading ? "Loading.." : "Buat Event"}
            </button>
            <button
              type="reset"
              className="mt-9 ms-1 hover:bg-gray-300 p-2 px-4 border border-black rounded-lg"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateEvent;
