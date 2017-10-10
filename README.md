# Artis

## Background and Overview

Artis is a platform that allows trade school students to market themselves and connect with other users that are looking for discounted services.

## Functionality and MVP
* User Login / Sign Up and Authentication
* Search by keyword or filter by category
* Index of available services
* Bookmarks
* Direct messages
* Personal Profile
* Demo Website
* Production readme

## Technologies
* React Native
* Socket.io
* Ruby on Rails
* Image hosting on Cloudinary (possibly AWS)

## Technical Challenges
* Learning a new front end framework
* Learning and implementing Socket.io for live messaging
* Setting up React Native with Rails


## Wireframes

Users are able to view a list of posted services by other users with marketable skills.


Users are able to view the most recent Doomi posts that were made by their friends through the main feed. They can also view their own list of Doomi's as well as their posting and comment streaks on their personal profile page. If a friend has yet to complete their Doomi, the user is able to send a nudge as a friendly reminder. Users are also able to upload pictures and add descriptions as well as tag their relevant Doomi's to the post they make.

## Things Accomplished Over the Weekend
* Research Technologies
* Setup a basic React Native App
* Setup Rails backend

## Group Members and Work Breakdown
Group of 3: Brian Sohn, Nixon Yiu, Jimmy Li

### Day 1 - 2
* User Authentication (All)
    * Setup Login/Logout/Signup with Rails and React Native to persist through sessions
* AWS
   * For storing user media

### Day 3 - 4
* Setup user profile ( Jimmy )
    * Upload avatar
    * List of user’s Doomi’s
    * Add a new Doomi to the list
    * Show information about the user’s personal streak
* Setup feed ( Brian )
    * Display updates and posts from friends
    * Ability to like and comment posts on the feed
    * Infinite scroll
    * Posts and associated comments delete after 24 hours
* Setup friends list ( Nixon )
    * Nudge feature that sends a reminder to the friend that hasn’t completed their Doomi
    * Heart feature for more positive reinforcement if Doomi's are completed

### Day 5 - 7
* Setup Socket.io for push notifications ( TBD )
* Setup AWS for media upload (Cloudinary as backup) ( TBD )

## If time allows
* Setup up live chat between users
    * Setup chat interface

## Plan for getting users and reviews

* Everyone on the team is going to share the app with friends, family and classmates.
* Post on reddit and facebook.

[wireframes]: https://github.com/sohbr/flex/blob/master/docs/Doomi%20Proud.png
