import React from "react";
import style from "../statistics/Statistics.module.css";

const Statistics = ({ stats, title }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.h2}>{title}</h2>
      <ul className={style.list}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li className={style.title} key={id}>
              <span className={style.lebel}>{label}: </span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
