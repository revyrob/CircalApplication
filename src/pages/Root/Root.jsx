import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import fireIcon from "../../assets/icons/icon_fire.png";
import groupIcon from "../../assets/icons/icon_people-group.svg";
import pointsIcon from "../../assets/icons/icon_star.svg";
import logo from "../../assets/icons/reconnect-logo.svg";
import companyLogo from "../../assets/icons/starbacks-logo.png";
import CardList from "../../components/mainComponents/CardList/CardList";
import supabase from "../../config/supabaseClient";
import { getUserId } from "../../userUtils.js";
import "./Root.scss";

export default function Root() {
  let aNumForInternalUser = 11;
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

  let eventInfo = [
    {
      0: {
        NumberOfParticipants: 3,
        created_at: "2024-06-26T09:03:25.354973",
        created_by_company_id: null,
        created_by_group_id: 3,
        created_by_user_id: null,
        description: "let's ride together!",
        event_date: "2024-07-24T19:54:22",
        event_image:
          """storage/v1/object/public/eventImages/6b71783b-6200-4c55-abe7-a41209f8db15/f6610c71-3388-4879-af29-0b665d7ef4af",
        frequency: null,
        id: 17,
        in_person: false,
        lat: null,
        location: "Toronto,Canada",
        long: null,
        online: false,
        title: "Let's Ride!",
      },
    },
  ];
  const [user, setUser] = useState(userInfo);
  const [events, setEvents] = useState(eventInfo);

  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     try {
  //       const userId = await getUserId();
  //       setInternalUserId(userId);
  //     } catch (error) {
  //       console.log("Error fetching userId:", error.message);
  //     }
  //   };
  //   fetchUserId();
  // }, []);

  // useEffect(() => {
  //   const getUser = async () => {
  //     let { data: user_data, error: user_error } = await supabase
  //       .from("user")
  //       .select()
  //       .eq("id", internalUserId);

  //     if (user_error) {
  //       console.error("Error fetching user:", user_error.message);
  //       return;
  //     }

  //     if (user_data && user_data.length > 0) {
  //       console.log(user_data[0]);
  //       setUser(user_data[0]);
  //     }
  //   };

  //   if (internalUserId) {
  //     getUser();
  //   }
  // }, [internalUserId]);

  // useEffect(() => {
  //   const getUserCompany = async () => {
  //     let { data: user_company_data, error: user_company_error } =
  //       await supabase.from("company").select().eq("id", user.company_id);

  //     if (user_company_error) {
  //       console.error("Error fetching user:", user_company_error.message);
  //       return;
  //     }

  //     if (user_company_data && user_company_data.length > 0) {
  //       console.log(user_company_data[0]);
  //       setUserCompany(user_company_data[0]);
  //     }
  //   };

  //   const getUserGroupCount = async () => {
  //     let { count } = await supabase
  //       .from("group_members")
  //       .select("*", { count: "exact", head: true })
  //       .eq("user_id", user.id);

  //     if (count) {
  //       console.log(count);
  //       setUserGroupsCount(count);
  //     }
  //   };

  //   if (user) {
  //     getUserCompany();
  //     getUserGroupCount();
  //   }
  // }, [user]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const userid = await getUserId();
  //       const { data: eventParticipants, error: errorEvent } = await supabase
  //         .from("event_participants")
  //         .select("*")
  //         .eq("user_id", userid);
  //       if (errorEvent) {
  //         console.log(
  //           "Error fetching connecting the database",
  //           errorEvent.message
  //         );
  //         return;
  //       }

  //       const eventIds = eventParticipants.map((event) => event.event_id);
  //       const { data: events, error } = await supabase
  //         .from("event")
  //         .select("*")
  //         .in("id", eventIds);
  //       if (error) {
  //         console.log("The database cannot fetch the events");
  //         return;
  //       }

  //       const { data: eventParticipant, error: eventParticipantError } =
  //         await supabase.rpc(`geteventparticipantcount`, {
  //           event_ids: eventIds,
  //         });
  //       if (eventParticipantError) {
  //         console.log("Problem in connecting with event_participant database");
  //         return;
  //       }

  //       const updatedEvents = events.map((event) => {
  //         const foundEvent = eventParticipant.find(
  //           (item) => event.id === item.event_id
  //         );

  //         return {
  //           ...event,
  //           NumberOfParticipants: foundEvent
  //             ? foundEvent.eventparticipantcount
  //             : 0,
  //         };
  //       });
  //       if (JSON.stringify(updatedEvents) !== JSON.stringify(events)) {
  //         console.log(updatedEvents);
  //         setEvents(updatedEvents);
  //       }
  //     } catch (error) {
  //       console.log("Error happened ", error.message);
  //     }
  //   };
  //   fetchEvents();
  // }, []);

  return (
    user && (
      <div className="container">
        <nav>
          <Link to="/">
            <img className="root__logo" src={logo} />
          </Link>
          <div className="user-info">
            <div className="avatar-field">
              <Link to="/">
                <img
                  id="avatar"
                  src={user.avatar ? user.avatar : ""}
                  alt={`${user.first_name}'s avatar`}
                />
              </Link>
            </div>
            <h4 className="root__user">{user.first_name}</h4>
            <h5>{user.location}</h5>
          </div>
          <ul className="root__navlink">
            <li>
              <NavLink
                to="/groups"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Groups
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Explore
              </NavLink>
            </li>

            <li>
              <Link to="/createGroup">
                <button className="btn">Start New Group</button>
              </Link>
            </li>
            <li>
              <Link to="/createPost">
                <button className="btn">Create Post</button>
              </Link>
            </li>
            <li>
              <Link onClick={() => supabase.auth.signOut()}>Logout</Link>
            </li>
          </ul>
        </nav>

        <div className="outlet">
          <Outlet />
        </div>

        {events.length > 0 ? (
          <CardList events={events} title={"Upcoming Events"} />
        ) : (
          <p>No events found.</p>
        )}
      </div>
    )
  );
}
