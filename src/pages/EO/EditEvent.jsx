import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  ProvinceData,
  CityData,
  SubdistrictData,
} from "../../api/IndonesianData";
import { capitalizeFirstLetter } from "../../utils/stringProcess";

function EditEvent() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    date: "",
    ticket: "",
    poster: "",
    address: {
      Province: "",
      City: "",
      Sub: "",
      detail: "",
    },
    idCategory: "",
  });

  useEffect(() => {
    axios
      .get(`/events/${id}`)
      .then((res) => {
        setData((prev) => ({
          ...prev,
          title: res.data.data.title,
          price: res.data.data.price,
          description: res.data.data.description,
          ticket: res.data.data.number_of_ticket,
          idCategory: res.data.data.category.category_id,
        }));
      })
      .catch((err) => console.log(err.response));
  }, [id]);

  useEffect(() => {
    axios
      .get("/categories/")
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

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

  const {
    title,
    price,
    description,
    date,
    ticket,
    poster,
    idCategory,
    address: { province, city, sub, detail },
  } = data;

  const formData = new FormData();

  async function submitUpdateEvent(e) {
    e.preventDefault();
    if (detail || province || city || sub) {
      if (!detail || !province || !city || !sub)
        return toast.error("Lokasi tidak lengkap");
      const formattedAddress = `${capitalizeFirstLetter(
        detail
      )}, ${capitalizeFirstLetter(sub.name)}, ${capitalizeFirstLetter(
        city.name
      )}, ${capitalizeFirstLetter(province.name)}`;
      formData.append("address", formattedAddress);
    }
    setLoading(true);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("number_of_ticket", ticket);
    if (poster) formData.append("poster", poster);
    if (category) formData.append("category_id", idCategory);
    if (date) formData.append("date_of_event", date);
    // Show Data
    // for (const pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }
    axios
      .put(`/events/${id}`, formData)
      .then((res) => console.log(res.data))
      .then(() => toast.success("Event Berhasil Diupdate"))
      .catch((err) => {
        console.log(err.response.data);
        toast.error("Event Gagal Di update");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="p-3 mx-5">
      <h5 className="text-xl border-b-2 border-gray-300">Edit Event</h5>
      <div className="bg-white mt-5 md:mx-20 rounded-xl">
        <form
          onSubmit={submitUpdateEvent}
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
                      <img src="/icons/iconFileUp.svg" alt="icon" />
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
                value={title}
                onChange={(e) => handleChange("title", e.target.value)}
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
                  handleChange("idCategory", e.target.value);
                }}
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
                  handleAddressChange("province", JSON.parse(e.target.value))
                }
              >
                <option value={""}>Pilih Provinsi</option>
                {ProvinceData().map((prov) => {
                  return (
                    <option key={prov.id} value={JSON.stringify(prov)}>
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
                  handleAddressChange("city", JSON.parse(e.target.value));
                }}
              >
                <option value={null}>Pilih kota</option>
                {CityData(province?.id).map((city) => {
                  return (
                    <option key={city.id} value={JSON.stringify(city)}>
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
                  handleAddressChange("sub", JSON.parse(e.target.value));
                }}
              >
                <option value={null}>Pilih kecamatan</option>
                {SubdistrictData(city?.id).map((sub) => {
                  return (
                    <option key={sub.id} value={JSON.stringify(sub)}>
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
                value={price}
                className="input-field"
                onChange={(e) => {
                  handleChange("price", e.target.value);
                }}
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
                value={ticket}
                onChange={(e) => {
                  handleChange("ticket", e.target.value);
                }}
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
                value={description}
                onChange={(e) => {
                  handleChange("description", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="self-end">
            <button type="submit" className="mt-9 btn-primary">
              {loading ? "Loading.." : "Simpan"}
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

export default EditEvent;
