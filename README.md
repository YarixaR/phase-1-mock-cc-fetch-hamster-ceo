# Phase 1 Mock Code Challenge: Fetch Hamster CEO

## Learning Goals

- Access information from an API using a GET request and use it to update the
  DOM
- Listen for user events and update the DOM in response

## Introduction

Today you'll be building an app for displaying Hamster images and details. You will be using a local API
and building out the frontend for our app.

## Setup

- Run `json-server --watch db.json` to get the backend started
- Open the `index.html` file on your browser
- Write your code in the `index.js` file

## Endpoints

Your base URL for your API will be: `http://localhost:3000`

The endpoints you may need are:

- GET `/hamsters`
- GET `/hamsters/:id`

Feel free to add any additional classes or ids to any elements in the HTML file
as you see fit.

## Core Deliverables

As a user, I can:

- See all hamster images in the `div` with the id of `hamster-menu`. When the page
  loads, request the data from the server to get all the hamster objects. Then,
  display the image for each of the hamsters using an `img` tag inside the
  `#hamster-menu` div.
- Click on an image from the `#hamster-menu` div and see all the info about that
  hamster displayed inside the `#hamster-detail` div.
- Create a new hamster after submitting the `new-hamster` form. The new hamster should
  be added to the `#hamster-menu` div. The new hamster does not need to persist; in
  other words, if you refresh the page, it's okay that the new hamster is no
  longer on the page.