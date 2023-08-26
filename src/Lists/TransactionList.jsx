import React from "react";
import TransactionCard from "../components/TransactionCard";

const TransactionList = ({ transactionHistory }) => {
  return (
    <>
      {transactionHistory.map((history) => (
        <TransactionCard {...history} key={history.transaction_id} />
      ))}
    </>
  );
};

export default TransactionList;
