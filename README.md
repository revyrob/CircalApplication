# Reconnect

## Introduction
<p>Having common interests can create empathy and understanding between co-workers. As companies go remote giving employees more freedom it can remove the a company’s culture by not giving the opportunity for co-workers to find common interests outside of work.</p>
<p>Our app helps to build that bridge. We want to repair those bonds of common interest but also bring a sense of company pride and gamification to it.
As companies take the step towards going fully remote, employees can lose the banter and kinship.  With our app you can share events with other employees and compete against other companies for points</p>


**Frontend:**

- Once your profile is created, you can join groups and events created by groups.
- The events can be held online or offline.
- Any user can create an event or a group.


**What it can do**
Login page uses Supabase Authenticate

Profile Page
Their posts best liked to least
Their groups
Awards, dummy data, potential to work on in the future

Update your profile with the icon in the top right corner

SideBar Nav

Explore:
User Posts
Likes (affects the Leaderboard posts for a company, higher liked ones will go first that are from a company employee)
How the # is associated with the group

Groups
View all the groups
See what members are in the group
Read more about the group
Click on a group
	Within the group:
Join or unjoin a group
Checkout the events for the group in the calendar
Checkout events on the side buttons
	Pop-up shows info about the event
	Join event
	See who is in the event

Calendar
Shows all the logged in users events
Can hover over and it will show more

Leaderboard
All the companies who have remote employees participating in Reconnect
Big bubbles mean more points, little bubbles mean less

Leaderboard Single
Checkout the company, it’s info, maybe it is looking for more employees?
Top star holders
The posts from it’s employees that are highly liked to lowest

Create Post

Create Group


## ⚒️ Tech Stack
![Logo](https://skillicons.dev/icons?i=html,scss,materialui,vite,supabase,postgres)

## Video Demo
https://www.loom.com/share/86dcf28cce6c4021ba549375bfb8eb76?sid=a9870daa-52c4-4c69-a7b3-ad86d45f8deb
https://www.loom.com/share/cee81c0a5af84b0f80bab70295999e0a?sid=5148e5f3-4937-40c9-9a3c-bffdace6377f
https://www.loom.com/share/5d84a510665b4fa88bfd34bcbf7b229c?sid=0f9857f8-b270-4156-b886-fa83969b38a1

## 👩‍💻 Local Installation : Frontend

To install and run locally, you may follow these steps:

1. To start using this app you first need to clone the repository: `git clone git@github.com:NuraSad/reconnector-frontend.git`

2. Then you will need to install all the required packages for the application. Run this command (if you're using npm): `npm i`

3. Run the frontend by the following command `npm run dev`

4. Create a .env file in the root folder and add the following to the file: `VITE_SUPABASE_URL` and `VITE_ANON_KEY` and `VITE_GOOGLE_API_KEY` in your local .env file.

## 🔨 Things to Work On

- Creating the awards section with the points (commented out code)
- Hooking up the Strava Component with the embed (commented out code)
- Lattitude and longitude are part of the site, they just need to be implemented into a map for the Event pop-ups that are physical events.
- Gaining points depending on the events you participate in (just by clicking the box), creating a post, and shareing your kms/hrs for an activity.
- You and your company would gain points from from your participation. You and your company could win different medals for participation.
- The user could see their raters and so the companies see their overall rating for employee involvement.# CircalApplication
