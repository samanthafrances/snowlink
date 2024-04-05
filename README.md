# Snow Link
Snow Link is an event finder app for the ski & snowboard community. Users are able to create an account, browse events, and add keep track of events they are interested in attending. 

## The Stack
Node, Express, MongoDB, Google OAuth Authentication, Heroku. 

## MVP 
- Frontend: Simple UI that allows users to navigate, create, view, and manage events, and also create and update their profile using authentication.
- Backend: Node.js server built with Express that handles user requests, and manages data.
- Database: MongoDB Mongoose collection that stores event data, user data, and authentication information.

## User Journey
- User lands on splash page that promts them to create an account with Google
- After logging in, the user is redirected to the events page, which displays a list of events.
- The user can click on a specific event to view its details page.
- If the user wants to keep track of an event, they can add it to their list of favorite events. The POST request to /events/{event-id}/favorite will store the event in the user's profile for later reference.
- The user can view their list of favorite events by navigating to the "Favorites" page.
- If the user wants to update or delete a favorited event, they can use the PUT and DELETE requests to /favorite-events/{event-id}.
- If the user wants to log out, they can navigate to the "Logout" page, which will end their session.


## Post-MVP
- Add Google maps API to event detail page.
- Add React.
- Enable the app to provide events in the user's area using user's geolocation.
- Enable users to add events to their google calender.
- Enable users to view others in their radius and message them directly.
- Enable paid banner ads to monetize app.
- Enable business such as ski resorts, restaurants, bars, etc. to create business accounts where they pay to boost their events and have more visibility and attendance.

## Credits
- Mountain photo: TAMARA SUSA/ASPEN SNOWMASS

## Project Planning
- [Heroku]()
- [Trello](https://trello.com/invite/b/G5EBooYj/ATTI9cad68d0979dfe18ab3e7d76fb8e22e7BCABBEB9/snow-link-app)
- [Figma](https://www.figma.com/file/DDU7ntXzqq366bkk0iZ9pL/Snowlink-App?type=whiteboard&node-id=0%3A1&t=RtijtPATjOeKULPJ-1)



