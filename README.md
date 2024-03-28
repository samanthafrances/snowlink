# Snow Link
Snow Link is a full-stack CRUD app for the ski & snowboard community. Users are able to create an account, make a profile, and browse events in their ski-resort radius.

## The Stack
Node, Express, MongoDB, OAuth Authentication, Heroku. 

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
- Users can view others in their radius and message them directly.
- Users can plan for upcoming trips and create saved lists of events they want to attend.
- Business such as ski resorts themselves, restaurants, bars, etc can create business accounts where they pay to boost their events in have more visibility and turn out. Think Yelp.

## Project Planning
- Trello and wireframes forthcoming.

