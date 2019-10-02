# Chews: Keto, Vegan, and Gluten-free restaurant recommendations in Kansas City
![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

## Description

_Duration: 2 Week Sprint_

Chews is a web application that addresses the difficulty that people on keto, vegan, and gluten-free diets face when looking for a restaurant. 

Users can view curated restaurants recommendations based on their diet. The recommendations appear as pins on a map of Kansas City. Chews also takes suggestions, which can be edited and approved by an administrator.

When a pin on the map is clicked, the restaurant's information appears on a modal. There is also a link to the GoogleMaps listing so they can easily get directions.

To see the fully functional site, please visit: https://www.chews-me.herokuapp.com

## Screen Shots

![Screenshot-map](https://macypruitt.github.io/github-images/chews-map.png)
![Screenshot-modal](https://macypruitt.github.io/github-images/chews-modal.png)


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- PostgreSQL (https://www.postgresql.org/download/)

## Installation

You will need a GoogleMaps Javascript API Key in the `.env` file labeled:
`REACT_APP_GOOGLE_MAP`

1. Create a database named `chews_app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.

3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. When you open the application it will ask for your location. Either click 'Block' or 'Allow'
2. You many filter results with the buttons on the bottom left
3. Click on a pin and check out the details on the modal
4. If you'd like to suggest a restaurant to be added to the map, click 'Suggest Restaurant' in the upper right-hand corner on the navigation bar
5. Fill the form, click 'I am not a robot', then hit the submit button
6. Thanks for visiting (and hopefully contributing) to Chews!

## Built With

- React, Redux-Saga, Express, Node.js, PostgreSQL
- Passport.js, bcrypt, pg, axios
- Google Maps Geolocation API, Google Maps Javascript API
- Material-UI, SweetAlert2

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) in Kansas City who equipped and helped me to make this application a reality. Thanks to Spencer for his keto enthusiasm and Peg teaching me about Celiac's!

## Support
If you have suggestions or issues, please email me at [macypruitt@gmail.com]
