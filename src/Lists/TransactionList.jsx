import React, { useEffect, useState } from "react";
import TransactionCard from "../components/TransactionCard";
import axios from "../api/axios";

function TransactionList({ dateOrder }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/transactions/my")
      .then((res) => {
        setData(changeOrder([...res.data.data], dateOrder));
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [dateOrder]);

  const changeOrder = (data, str) => {
    if (str === "Terlama") {
      let newTransaction = [...data];
      newTransaction.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA - dateB;
      });
      return newTransaction;
    } else {
      let newTransaction = [...data];
      newTransaction.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
      return newTransaction;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3">
      {data.length !== 0 ? (
        data.map((item) => {
          return <TransactionCard {...item} key={item.transaction_id} />;
        })
      ) : (
        <p className="text-center">Kamu tidak memiliki riwayat transaksi</p>
      )}
    </div>
  );
}

export default TransactionList;
