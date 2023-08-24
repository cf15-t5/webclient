import React, { useEffect, useState } from "react";
import {
  dateToDDMonthYYYY,
  dateToHHMMSS,
  formatToIDRCurrency,
} from "../utils/stringProcess";
import axios from "../api/axios";

const TransactionCard = ({ type, nominal, created_at, ticket }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getEventTitle(event_id) {
      axios
        .get(`/events/${event_id}`)
        .then((res) => {
          setTitle(res.data.data.title);
        })
        .catch((err) => {
          setTitle("Event tidak ditemukan");
        });
    }
    if (ticket) {
      getEventTitle(ticket.event_id);
    }
  }, []);

  return (
    <div className="flex flex-row justify-between items-start w-full border-b border-gray-100 py-4 px-6">
      {type === "buy" ? (
        <>
          <div>
            <p className="text-gray-900 font-medium">Pembelian Tiket</p>
            <p className="text-gray-700">
              Nominal : {formatToIDRCurrency(nominal)}
            </p>
            <p className="text-gray-700">Event : {title}</p>
          </div>
          <div className="flex flex-col justify-center items-end text-right text-[14px]">
            <p>{dateToDDMonthYYYY(created_at)}</p>
            <p>{dateToHHMMSS(created_at, 7)}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="text-gray-900 font-medium">
              {type === "withdraw" ? "Penarikan saldo" : "Penambahan Saldo"}
            </p>
            <p className="text-gray-700">
              Nominal : {formatToIDRCurrency(nominal)}
            </p>
          </div>
          <div className="flex flex-col justify-center items-end text-right text-[14px]">
            <p>{dateToDDMonthYYYY(created_at)}</p>
            <p>{dateToHHMMSS(created_at, 7)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionCard;
