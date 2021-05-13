import React from "react";
import s from "../transactionHistory/transactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
 const [{ id }] = transactions;
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
        {transactions.map(({ type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{[type]}</td>
              <td>{[amount]}</td>
              <td>{[currency]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
