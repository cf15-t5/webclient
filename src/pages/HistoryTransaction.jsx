import React, { useState } from "react";
import TransactionList from "../Lists/TransactionList";
import Dropdown from "../components/Dropdown";

function HistoryTransaction() {
  const [dateOrder, setdateOrder] = useState("Terlama");

  const handleChangeDateOrder = (str) => {
    setdateOrder(str);
  };
  return (
    <section className="p-3 mx-5">
      <h5 className="text-xl border-b-2 border-gray-300">Riwayat Transaksi</h5>
      <div className="lg:mx-48 mb-5">
        <div className="py-6 flex flex-row justify-start items-center gap-2">
          <p>Urutkan berdasarkan</p>
          <Dropdown
            options={["Terbaru", "Terlama"]}
            value={dateOrder}
            setValue={handleChangeDateOrder}
          />
        </div>
        <TransactionList dateOrder={dateOrder} />
      </div>
    </section>
  );
}

export default HistoryTransaction;
