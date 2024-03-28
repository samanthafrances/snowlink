# Snow Link
Snow Link is a full-stack CRUD app for the ski & snowboard community. Users are able to create an account, browse events, and add events based on their location.

## The Stack
Node, Express, MongoDB, Google OAuth Authentication, Heroku. 

## MVP 
- Frontend: Simple UI that allows users to navigate, create, view, and manage events, and also create and update their profile using authentication.
- Backend: Node.js server built with Express that handles user requests, and manages data.
- Database: MongoDB collection that stores event data, user data, and authentication information.
- Geolocation: Enable the app to provide events in the user's area using user's geolocation.

## User Journey
- Fetch user's geolocation using their browser IP.
- Query the nearest events using the geospatial index on the backend.
- Display available meet-up events around the user's location.

## Routes
- GET /signup: Displays the sign-up view for users to create a new account.
- POST /signup: Creates a new user account, authenticates the user, and redirects to an authenticated route (e.g. /me, /events).
- GET /login: Displays the login view for users to authenticate.
- POST /login: Authenticates the user and redirects to an authenticated route (e.g. /me, /events).
- GET /logout: Logs the user out and redirects to a non-authenticated route (e.g. /login).
- GET /events: Fetches the list of events from the database based on user's geolocation.
- GET /events/{event-id}: Fetches an event detail based on the specific event ID.
- POST /events: Creates a new event in the database.
- PUT /events/{event-id}: Updates an existing event in the database.
- DELETE /events/{event-id}: Deletes an existing event from the database.
- GET /profiles/{profile-id}: Fetches the user profile.
- PUT /profiles/{profile-id}: Updates an existing user profile in the database.

## Post-MVP
- Add React
- Enable users to add events to their calender.
- Enable users to view others in their radius and message them directly.
- Enable users to plan for upcoming trips and create saved lists.
- Enable business such as ski resorts themselves, restaurants, bars, etc. to create business accounts where they pay to boost their events and have more visibility and attendance.
- Patent the app idea

## Project Planning
Trello: https://trello.com/invite/b/G5EBooYj/ATTI9cad68d0979dfe18ab3e7d76fb8e22e7BCABBEB9/snow-link-app 

