import React from "react";
import TransactionCard from "../components/TransactionCard";

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
