Assignment 1
=====
**Due: May 12th, 2018**

You already have a lot of practice displaying information directly in HTML or Javascript. This is definitely the most convenient way to test your code, but it's not the way to build a professional website or web application!

Often times, data lives in a SQL database. A full-stack engineer would need to know how to:
* Query a database
  - returns something like `List<Map<String, Object>>`
* Process this data on the server for displaying on the client (as needed)
  - Strip sensitive data
  - Change data structure
  - Execute other code
* Process this data on the client
  - Respond to events
  - Populate and display components

This first assignment will focus on the last stage.

Working with JSON Data
-----
You may already be familiar with JSON (JavaScript Object Notation). It involves representing objects as nested sets and lists with properties. Due to the inherent compatibility with browser Javascript, servers often decide to use JSON as a response type.

For your assignment, lets say you're working on a web application to track a user's favorite movies. Currently, you're working on the main table view that lists all of the movies the user has selected.

Let's specify our datatypes:

* Movie
  - Title (title: String)
  - Description (text: String)
  - IMDb Link (link: String)

I want you to explore a few different scenarios:

1.  You have a JSON array of movies. You need to display a card for a *specific* movie.
2.  Display a *range* of movies.
3.  Give the user a button. When clicked, it will add a new movie with predefined fields. You can opt to pull the next one from a list, sequentially or randomly, or even just add the same movie repeatedly. *Note: Check `sample1.png` for a snapshot of what a solution to this stage could look like.*
4.  You will now load the movies directly from the server, in addition to loading them from the static file. The AJAX end-point you should use is: http://training1.homegrown-solutions.com/movies/get/all. Just append the server-data to the local array for now.
5.  Same as above, but with a simple *catch*: if the server returns anything other than a 200 Response Code, fail gracefully. No errors, or any indication that a server connection failed.

Only your code for Scenario 5 will be collected. However, each scenario builds on the last, so I recommend working on them sequentially.

Questions
-----
1.  Your team gets a new requirement to keep track of related movies for each movie. How can you integrate this information into the existing `movies` array we already have?. Feel free to include pseudocode, if desired.
2.  Add a bunch of movies to the view by clicking the button. Now refresh the page. What happened to the movies you added? Why?
3.  Going off of the last question, how can you use *Local Storage* or *Session Storage* to persist User data through a refresh? What changes do you need to make to add this feature?
4.  Your client wants a 'X' button in the top-right corner of each movie card to delete it from the list. How would you go about implementing this feature? *(please provide a high-level overview or pseudocode, don't actually implement)*
5.  Your client wants to know if it is possible to give each card a different color background depending on the movie. Is this a feasible feature? How would you go about implementing this? *(please provide a high-level overview or pseudocode, don't actually implement)*


Instructions
-----
A lot of the structure of the code has been provided. Please look for a "Your code here" comment to see what parts should be modified and what parts should be used as given.

In your submission, please include the following:

* **Code for Scenario 5**
  - `movieView.js`
  - `Assignment1.html`
  - `movieStyles.css`
  - *Any other files you created*
* **Report**
  - Should only be about *1-2 pages, single spaced*
  - docx, txt, md, pdf file (bonus points if you use LaTeX!)
  - *Summary* of what changes you made, and a high-level overview of how your code works
  - *Answers* to all questions
  - *Reflection:* What did you learn? What would you do differently if you had to do this project a second time?

Submit these files as a .7z.

Please do not hesitate to ask questions; there are a lot of topics we are covering and I expect you to be challenged.
