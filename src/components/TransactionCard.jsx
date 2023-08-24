import React, { useEffect, useState } from "react";
import iconMoney from "../assets/iconMoney.png";
import {
  formatToIDRCurrency,
  capitalizeFirstLetter,
  formatPosterURL,
  dateToDDMonthYYYY,
} from "../utils/stringProcess";
import axios from "../api/axios";

function TransactionCard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props?.ticket?.event_id) {
      axios
        .get(`/events/${props?.ticket?.event_id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err.data);
        });
    }
  }, [props?.ticket?.event_id]);

  return (
    <div className="flex flex-row justify-between items-center bg-white w-full rounded-md shadow-md">
      <div className="flex flex-row justify-center items-center gap-4">
        <img
          src={
            props.type === "buy" ? formatPosterURL(data.poster_path) : iconMoney
          }
          alt="poster"
          className={
            props.type === "buy"
              ? "h-24 w-[10vw] object-cover rounded"
              : "ms-10 w-[40px] "
          }
        />
        <div className="flex flex-col justify-center items-start py-4 px-2  text-sm">
          {props.type === "buy" ? (
            <div>
              <h1 className="font-bold text-lg">{data.title}</h1>
              <p>Tanggal Event : {dateToDDMonthYYYY(data.date_of_event)}</p>
              <p>Tanggal Pembelian : {dateToDDMonthYYYY(props.created_at)}</p>
            </div>
          ) : (
            <div>
              <p className="font-bold text-lg">
                {capitalizeFirstLetter(props.type)}
              </p>
              <p className=" text-red-300 font-semibold">
                {formatToIDRCurrency(props.nominal)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;
