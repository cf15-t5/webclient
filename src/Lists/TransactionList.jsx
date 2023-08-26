import React, { useEffect, useState } from "react";
import TransactionCard from "../components/TransactionCard";
import axios from "../api/axios";

function TransactionList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/transactions/my")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3">
      {data.map((item) => {
        return <TransactionCard {...item} key={item.transaction_id} />;
      })}
    </div>
  );
}

export default TransactionList;
