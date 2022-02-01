# MyFlixClient
![ex-3 6](https://user-images.githubusercontent.com/86426968/152045028-95efcdf4-7612-4ec8-83e2-046e746718fc.gif)



## Objective

Client-side of the MyFlix API built using the MERN tech stack
(MongoDB, Express, React, and
Node.js).

## Design Criteria

### User Stories
- As a user, I want to be able to access information on movies, directors, and genres so
that I can learn more about movies I’ve watched or am interested in.
- As a user, I want to be able to create a profile so I can save data about my favorite
movies.

## Features & Requirements

#### Main view
- Returns a list of ALL movies to the user (each listed item with an image, title, and
description)
- Sorting and filtering
- Ability to select a movie for more details

#### Single movie view
- Returns data (description, genre, director, image) about a single movie to the user
- Allows users to add a movie to their list of favorites

#### Login view
- Allows users to log in with a username and password
Registration view
- Allows new users to register (username, password, email, birthday)

#### Genre view
- Returns data about a genre, with a name and description
- Displays example movies

##### Director view
- Returns data about a director (name, bio, birth year, death year)
- Displays example movies

#### Profile view
- Allows users to update their user info (username, password, email, date of birth)
- Allows existing users to deregister
- Displays favorite movies
- Allows users to remove a movie from their list of favorites

## Technical Requirements
- Single-page application (SPA)
- Built with React and the MERN stack
- Uses state routing to navigate between views and share URLs
- Uses Parcel as its build tool
- Written with React Redux (hence respecting the Flux pattern)
- Uses Bootstrap as a UI library for styling and responsiveness
