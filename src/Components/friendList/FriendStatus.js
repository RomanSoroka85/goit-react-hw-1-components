import React from "react";
import style from "../friendList/FriendList.module.css";

const FriendStatus = ({ isOnline, id }) => {
  console.log("isOnline :>> ", isOnline);
  return (
    <span className={isOnline ? style.offline : style.online} key={id}></span>
  );
};

export default FriendStatus;
