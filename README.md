# Tweeter
simplified single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX 

## Functionality of Tweeter is as follows:
- able to compose a message and save it to the server.
- tweeter is a able to display the message from the server without having to have a local db.
- able to toggle the compose new tweet section with a button press.
- able to display more than one tweet at a time.
- able to highlight specific tweets from a list of tweets
- once specific tweet is highlighted displays socail icons
- able to show how long ago tweet was posted
- compose tweet section is able to count and track characters used in textfield
  notifying the user if they have gone over limit
- compose tweet field will not let user input nothing into text field as well as not post over the limit of 140 char.
- auto selects text field for user when toggle for compose tweet is used and clears form for use afterwards.

## Screenshots

!["Screenshot of compose tweet function"](https://github.com/KimonoKurtRussell/Tweeter/blob/master/Docs/Compose%20tweet%20toggled%20down%20for%20creation%20of%20tweet.png)
!["Screenshot of hover funtionality on singular tweets"](https://github.com/KimonoKurtRussell/Tweeter/blob/master/Docs/On%20Hover%20icon%20show%20and%20highlight%20of%20tweet.png)
!["Screenshot of multiple tweets on one page"](https://github.com/KimonoKurtRussell/Tweeter/blob/master/Docs/Tweeter%20app%20with%20mutiple%20tweeters.png)


### Dependencies
- body-parser
- express
- mongodb
- chance
- md5
