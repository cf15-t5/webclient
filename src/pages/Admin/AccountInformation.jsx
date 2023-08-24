import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import {
  dateToDDMonthYYYY,
  formatToIDRCurrency,
} from "../../utils/stringProcess";
import Dropdown from "../../components/Dropdown";
import TransactionCard from "../../components/TransactionCard";

const AccountInformation = () => {
  const { user_id } = useParams();
  const [data, setdata] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [dateOrder, setdateOrder] = useState("Terbaru");

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`/users/`)
        .then((res) => {
          const selected_user = res.data.data.find(
            (user) => user.user_id === parseInt(user_id)
          );
          setdata(selected_user);
        })
        .catch((err) => {
          console.log(err);
          setdata();
        });
      axios
        .get(`/transactions/${user_id}`)
        .then((res) => {
          setTransactionHistory(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          setTransactionHistory([]);
        });
    }

    fetchData();
  }, [user_id]);

  const handleChangeDateOrder = (str) => {
    setdateOrder(str);
    changeOrder();
  };

  const changeOrder = () => {
    if (dateOrder === "Terlama") {
      let newTransaction = [...transactionHistory];
      newTransaction.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA - dateB;
      });
      setTransactionHistory(newTransaction);
    } else {
      let newTransaction = [...transactionHistory];
      newTransaction.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
      setTransactionHistory(newTransaction);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-fit py-5 px-5 gap-5">
      <div className="flex flex-col md:flex-row justify-center items-start gap-5 w-full">
        {/* INFORMATION */}
        <div className="flex flex-col justify-start items-start bg-white p-5 rounded-lg w-full md:w-[600px]">
          {data !== null ? (
            <div className="w-full">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Informasi Akun
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Detail informasi akun
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Nama
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.name}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Email
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.email}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Tipe Akun
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.role === "EVENT_ORGANIZER"
                        ? "Event Organizer"
                        : "User"}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Saldo
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {formatToIDRCurrency(data.balance)}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Status Akun
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.status === "ACTIVE" ? "Aktif" : "Belum aktif"}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Tanggal dibuat
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {dateToDDMonthYYYY(data.created_at)}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Tanggal terakhir perubahan
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {dateToDDMonthYYYY(data.updated_at)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ) : (
            <div>Memuat informasi akun</div>
          )}
        </div>

        {/* ACTIVITY */}
        <div className="flex flex-col justify-start items-start bg-white p-5 rounded-lg w-full">
          {data !== null && transactionHistory.length !== 0 ? (
            <div className="w-full">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Aktivitas Akun
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Riwayat aktivitas akun {data.name}
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100 w-full">
                <div className="py-6 flex flex-row justify-start items-center gap-2">
                  <p>Urutkan berdasarkan</p>
                  <Dropdown
                    options={["Terbaru", "Terlama"]}
                    value={dateOrder}
                    setValue={handleChangeDateOrder}
                  />
                </div>
                <div className="flex flex-col w-full gap-2 h-[50vh] overflow-y-auto">
                  {transactionHistory.map((history, index) => (
                    <TransactionCard {...history} key={index} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>Memuat riwayat transaksi</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
