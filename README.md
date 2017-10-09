# Doomi Proud

## Background and Overview

Do you feel unmotivated? Do you want someone to nudge you on? Well, Doomi Proud is a React Native mobile application that promotes forming new habits with the help of friends. Users can share their progress by posting to the feed or directly to friends. If one of your buddies seems like they're not making any progress on their Doomi's, send them a nudge!

## Functionality and MVP
* User Login / Signup and authentication
* Feed
* Post/Response Streak
* Upload Photos and Progress updates
* Direct messages and group chat
* Personal Profile
* Demo Website
* Production readme

### Bonus
* Like and comments
* Nudge to remind friends to do something

## Technologies
* React Native
* Facebook OAuth
* Socket.io
* Ruby on Rails
* AWS for image hosting

## Technical Challenges
* Learning a new front end framework
* Learning AWS
* Implementing Socket.io for live messaging
* Setting up React Native with Rails
* Implementing Facebook OAuth

## Wireframes

![Wireframes][wireframes]

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
* Setup Socket.io for push notifications
* Setup up live chat between users

## Plan for getting users and reviews

* Everyone on the team is going to share the app with friends, family and classmates.
* Post on reddit and facebook. 

[wireframes]: https://github.com/sohbr/flex/blob/master/docs/Doomi%20Proud.png
