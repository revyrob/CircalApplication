import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.scss";
import Post from "../../components/mainComponents/Post/Post";
import MiniGroup from "../../components/smallComponents/MiniGroup/MiniGroup";
import UpdateProfilePopup from "../../components/mainComponents/UpdateProfilePopup/UpdateProfilePopup";
import PropTypes from "prop-types";
import bikingMedal from "../../assets/medals/biking-medal.png";
import hikingMedal from "../../assets/medals/hiking-medal.png";
import supabase from "../../config/supabaseClient";

import createIcon from "../../assets/icons/create.svg";
import fireIcon from "../../assets/icons/icon_fire.png";
import pointsIcon from "../../assets/icons/icon_star.svg";
import userIcon from "../../assets/icons/profile.png";

export default function ProfilePage({ userId }) {
  let userInfo = {
    auth_user_id: "b691c07d-61c0-4e73-984b-986e32ca2b80",
    avatar:
      """storage/v1/object/public/userAvatar/b691c07d-61c0-4e73-984b-986e32ca2b80/a05c2eda-ff3d-4a1a-b3c8-b278e87cfe06",
    company_id: 6,
    created_at: null,
    email: "kayle.robson@gmail.com",
    first_name: "Kayle",
    id: 11,
    last_name: "Robson",
    location: "Rossland",
    points: 180,
    preferred_radius: 30,
    streak: 4,
    total_km: null,
    username: null,
  };

  let postInfo = [
    {
      key: 2342343,
      last_name: "Robson",
      first_name: "Kayle",
      username: "klee",
      tag: "runFun",
      img1: "https://unsplash.com/photos/silhouette-of-three-women-running-on-grey-concrete-road-oGv9xIl7DkY",
      postTitle: "Best Running Ever",
      postText: "You Know lots of info here",
      likes: 100,
    },
    {
      key: 233343,
      last_name: "Robson",
      first_name: "Kayle",
      username: "klee",
      tag: "runFun",
      img1: "https://unsplash.com/photos/silhouette-of-three-women-running-on-grey-concrete-road-oGv9xIl7DkY",
      postTitle: "Best Running Ever",
      postText: "You Know lots of info here",
      likes: 100,
    },
  ];
  const [user, setUser] = useState(userInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [posts, setPosts] = useState(postInfo);
  const [groups, setGroups] = useState([]);

  if (user && isEditing) {
    return (
      <UpdateProfilePopup
        userInit={user}
        onClose={() => setIsEditing((prev) => !prev)}
      />
    );
  }

  return (
    user && (
      <div className="user-profile">
        <h1 className="user-profile__title page-font"></h1>
        <div className="user-profile__container">
          <div className="top">
            <div className="avatar-field">
              <div className="stat">
                <img src={fireIcon} alt="fire" />
                <p>{user.streak}</p>
              </div>
              <div className="avatar">
                <img
                  className="photo"
                  src={user.avatar?.length ? user.avatar : userIcon}
                  alt={`${user.first_name} avatar`}
                />
              </div>
              <div className="stat">
                <img src={pointsIcon} alt="star" />
                <p>{user.points}</p>
              </div>
            </div>
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
            <p className="email">{user.email}</p>
            <p>{user.location}</p>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              <img src={createIcon} alt="edit icon" />
            </button>
          </div>
          <h3>Featured Awards</h3>
          <div className="awards-field">
            <div className="award">
              <img src={bikingMedal} alt="men riding a bike" />
              <span>Cycling Commute Champion</span>
              <p> Awarded for the most miles cycled while commuting.</p>
            </div>
            <div className="award central">
              <img src={hikingMedal} alt="men climbing" />
              <span>Hiking Hero</span>
              <p>Awarded for completing the most challenging hiking trails.</p>
            </div>
            <div className="award">
              <img src={bikingMedal} alt="men riding a bike" />
              <span>Cycling Commute Champion</span>
              <p> Awarded for the most miles cycled while commuting.</p>
            </div>
          </div>
          <h3>Most Active Groups</h3>
          <div className="groups-field">
            {groups.length ? (
              groups.map((group, i) => (
                <Link key={i} to={`/groups/${group.id}`}>
                  <MiniGroup name={group.name} src={group.image} />
                </Link>
              ))
            ) : (
              <p className="empty-message">You have no groups</p>
            )}
          </div>
          <h3>Recent Post</h3>
          <div className="posts-field">
            {posts.length ? (
              posts.map((i) => (
                <Post
                  key={i.id}
                  profileAvatar={i.profileAvatar}
                  last_name={i.last_name}
                  first_name={i.first_name}
                  username={i.created_by}
                  tag={i.group_name}
                  img1={i.image}
                  postTitle={i.title}
                  postText={i.body}
                  likes={i.likes}
                />
              ))
            ) : (
              <p className="empty-message">You have no posts</p>
            )}
          </div>
        </div>
      </div>
    )
  );
}

ProfilePage.propTypes = {
  userId: PropTypes.number,
};
