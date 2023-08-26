import React, { useState } from "react";
import axios from "../api/axios";
import { toast } from "react-hot-toast";
import { formatToIDRCurrency } from "../utils/stringProcess";

function Wallet({data}) {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState("");

  function topUp() {
    if (value < 0 || !value) return toast.error("Nominal tidak Valid");
    setLoading(true);
    axios
      .post("/users/topup", { nominal: value })
      .then(() => {
        toast.success("Berhasil Isi Ulang");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        toast.error("Gagal Isi Ulang");
      })
      .finally(() => setLoading(false));
  }

  function withdraw() {
    if (value < 0 || !value) return toast.error("Nominal tidak Valid");
    setLoading(true);
    axios
      .post("/users/withdraw", { nominal: value })
      .then(() => {
        toast.success("Withdraw Success");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.data);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="bg-white px-4 py-6 rounded-xl">
      <h6 className="inline">Balance</h6>
      <h6 className="inline font-bold ms-4">
        {formatToIDRCurrency(data?.balance)}
      </h6>
      <div className="relative my-3">
        <label
          for="value"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Nominal
        </label>
        <input
          onChange={(e) => setValue(parseInt(e.target.value))}
          type="number"
          id="value"
          required
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => topUp()}
          className="px-3 py-2 text-xs btn-primary"
        >
          {loading ? "Loading..." : "Isi Ulang"}
        </button>
        <button
          type="button"
          onClick={() => withdraw()}
          className="px-3 py-2 text-xs btn-primary"
        >
          {loading ? "Loading..." : "Tarik"}
        </button>
      </div>
    </div>
  );
}

export default Wallet;
