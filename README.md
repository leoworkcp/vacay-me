<h1 align="center">VacayMe</h1>

<p align="center">See the site hosted on heroku
<br><a href="https://vacay-me.herokuapp.com/">VacayMe</a></br></p>
&nbsp

## About

---

VacayMe is a clone of Airbnb but for exotic places. Users can view and search
for spots from our database by title, price, location, or description. Signing up allows

users to book spots, track their current and previous bookings, and add or remove their reviews.

## Technologies used

---

- PostgreSQL
- Sequelize
- Node.js
- npm
- Express.js
- React
- Redux
- Java-Script
- All styling was done with raw CSS, no frameworks were used.

<p> </p>

## Development Environment

---

- The database should be generated and seeded with the sequelize commands:
- `npx dotenv sequelize-cli db:create`
- `npx dotenv sequelize-cli db:migrate`
- `npx dotenv sequelize-cli db:seed:all`
- The project can be run locally through the command line with `npm start`

<p> </p>

## Wiki Documentation

---

- [User Stories](https://github.com/leoworkcp/vacay-me/wiki/user-stories)
- [Front End Routes](https://github.com/leoworkcp/vacay-me/wiki/frontend-routes)
- [Database Schema](https://drawsql.app/3headmonkeynyc/diagrams/vacay-me#)
- [Feature List](https://github.com/leoworkcp/vacay-me/wiki/feature-list)

<p> </p>

## Key Technical Features

---

### AJAX for the reviews

A key feature that shows technical abilities is using AJAX on the reviews portion of our site. A user
is able to navigate to a spot and add a review for that spot. Without refreshing, the review shows up on the page and the user then has the ability to edit and remove that review after having created it. This was accomplished by using api routes. When the user clicks "submit review" a fetch call is made to an api which updates our database with the review and then sends back a JSON review object. The JSON object is parsed and the information for the review is then added to the document as shown in the image below.

### Custom backgrounds for specific Spots

---

---

## Obstacles

---

- Creating the search bar logic querying for all the database information was definitely one of toughest implementations.
- Using AJAX to create a dynamic and responsive UI for the Website was one of the challenges we accomplished on this project.

### Database Schema

---

<p> </p>

### User Reviews

Using AJAX to add user reviews was our first AJAX implementation of dynamic UI and was hard to make it work.

Styling the the website pages using raw CSS was another obstacle I had.

<p> </p>

## Code Samples

---

Code snippets to highlight the best code

## Future Improvements

---

This project was a sprint. Some features I would like to include in the future
are:
