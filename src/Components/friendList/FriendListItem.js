import React from "react";
import style from "../friendList/FriendList.module.css";
const FriendListItem = ({ item }) => {
  const { avatar, name, isOnline , id} = item;
  
  return (
    <li className={style.itemList} key={id}>
      <span className={isOnline ? style.offline : style.online} ></span>
      <img className={style.itemListAvatar} src={avatar} alt="" width="48" />
      <p className={style.itemListName}>{name}</p>
    </li>
  );
};

export default FriendListItem;
