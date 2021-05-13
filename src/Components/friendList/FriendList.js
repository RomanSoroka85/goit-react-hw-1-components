import React from "react";
import style from "../friendList/FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className={style.profile}>
      <ul className={style.item}>
        {friends.map((item) => (
          <FriendListItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
