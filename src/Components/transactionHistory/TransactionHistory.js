import React from "react";
import s from "../transactionHistory/transactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
 
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {transactions.map((item) => {
          return (
              
            <tr key={item.id} className={item.id[1] % 2 === 1 ?  s.white : s.gray }>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
