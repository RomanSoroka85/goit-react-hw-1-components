import React from "react";
import style from "../friendList/FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends, id }) => {
  return (
    <div className={style.profile} >
      <ul className={style.item} key={id}>
        {friends.map((item) => (
          <FriendListItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
