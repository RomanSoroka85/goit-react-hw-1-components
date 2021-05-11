import React from "react";
import style from "../friendList/FriendList.module.css";
import FriendStatus from "./FriendStatus";

const FriendList = ({ friends, isOnline }) => {
  return (
    <div className={style.profile}>
    <ul className={style.item}>
      {friends.map((item) => (
        <li className={style.itemList} key={item.id}>
          <FriendStatus isOnline={isOnline}  />
          <img
            className={style.itemListAvatar}
            src={item.avatar}
            alt=""
            width="48"
          />
          <p className={style.itemListName}>{item.name}</p>
        </li>
      ))}
    </ul></div>
  );
};

export default FriendList;
