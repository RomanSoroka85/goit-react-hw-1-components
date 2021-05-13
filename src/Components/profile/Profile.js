import React from "react";
import s from '../profile/profile.module.css'

const Profile = ({ user }) => {
  const { avatar, name, tag, location } = user
  const { followers, views, likes } = user.stats;
  return (
    <>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className={s.stats}>
          <li>
            <span className="label">Followers: </span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views: </span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes: </span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
