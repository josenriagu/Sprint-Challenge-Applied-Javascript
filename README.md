# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif 'Example of working project')

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

    The DOM - acronym for `Document Object Model` is an object representation of the HTMl elements of a webpage. It is a dynamic, language neutral Application Programming Interface that treats HTMl document as a tree-like structure consisting of node objects, each representing contents and styles. The DOM lives in the browser.

2. What is an event?

    In a basic understanding, I see an event as any browser activity or user related action that could be used to manipulate or otherwise add further innteractivity to the website. For instance;
    `The browser disconnects from network --- event!`
    `The browser finishes loading contents --- event!`
    `The user moves his mouse pointer on the view port --- Aha! event!!`
    `The user clicks on an element --- another event!`

3. What is an event listener?

    Having the basic understanding of what an event is, we may now say an event listener is a method that checks if an event has taken place, determines the type of event and triggers the call back function. For instance;
    We may tell the event listener to check when the user clicks on some element and then flash some color on the screen! The method addEventListener takes two arguments;` the event type` and the `call back function` `{addEventListener('event-type', 'function())}`

4. Why would we convert a NodeList into an Array?

    By default, a NodeList is not a real array. It is just an Array-like object. It does not have acess to Array methods other than `.forEach()`. However, to be able to manipulate it like a real array, we use the the `Array.from()` method to convert it.

5. What is a component?

    A component is simply a `basic, reusable set of code` that could be potentially used to build other blocks. As a basic building block, similar blocks can be built by just passing some object parameters or any other as the case may be.

### Git Set up

* [X] Fork the project into your GitHub user account
* [X] Clone the forked project into a directory on your machine
* [X] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [X] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [X] Look through the HTML code paying particular attention to the Tabs component and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected.

* [X] Following the instructions in the `Tabs.js` file, complete the `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Think about ways to iterate over an array and manipulate each item.  **Note: You will need to un-comment the code after the lines of instructions.  The code is commented out so you can work error-free**

* [X] Once you get your `Tab` component working properly add a couple more articles yourself and check out how it works.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply un-comment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs.js` file for assistance.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, play around with the styling on all the components, and understand how each is built.
