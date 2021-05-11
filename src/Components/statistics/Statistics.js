import React from "react";
import style from '../statistics/Statistics.module.css'


const Statistics = ({ statisticalData }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.h2}>Upload stats</h2>
      <ul className={style.list}>
        {statisticalData.map((item) => (
          <li className={style.title}>
            <span className={style.lebel}>{item.label}: </span>
            <span className={style.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
