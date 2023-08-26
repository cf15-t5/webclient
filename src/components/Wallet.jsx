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
    <div className="bg-white px-4 py-6 rounded-xl shadow-md">
      <h6 className="inline">Balance</h6>
      <h6 className="inline font-bold ms-4">
        {formatToIDRCurrency(data?.balance)}
      </h6>
      <div className="relative my-3">
        <input
          onChange={(e) => setValue(parseInt(e.target.value))}
          type="number"
          id="value"
          required
          className="input-field"
          placeholder="Nominal"
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
