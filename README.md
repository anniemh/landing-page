# landing-page
## Table of Contents
* [Description](#description)
* [Project Requirements](#project-requirements)
* [Tech](#tech)
* [Features](#features)
* [Credits](#credits)

## Description
This is the second project of the Front End Web Developer Nanodegree program. The project requirements are to build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

## Project Requirements
- Navigation is built dynamically as an unordered list.
- It should be clear which section is being viewed while scrolling through the page. Intersection Observer API is used for this.
- When clicking an item from the navigation menu, the link should scroll to the appropriate section. Element.scrollIntoView() is used for this.
- Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page. Intersection Observer is used for this.
- All features are usable across modern desktop, tablet, and phone browsers. Mobile-first approach is used for design. Responsive design features three breakpoints, one for tablets (768px and up), one for laptops and desktop computers (992px and up), and one for extra large devices (1200px and up)
- Styling has been added to highlight the active states.

## Tech
- HTML
- CSS
- JAVASCRIPT

## Features
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. Used in this project for the _higlight functionality_. The sections should have a min height of 700px.
- [Material Icons](https://fonts.google.com/icons?selected=Material+Icons) - For our _mobile menu_ we are using material icons: menu and close and for a scroll to top button we are using material design icon: keyboard double arrow up.
- [Unsplash](https://unsplash.com/) - Images from The Thought Catalog, Sarah Takforyan, Ruslan Bardash and Francisco De Legarreta C have been used for this project.

## Credits
- [Tutorial: Events and Animations with Intersection Observer API](https://cheewebdevelopment.com/vanilla-js-scroll-events-animations-with-intersectionobserver-api/)
- [Tutorial: Master the Intersection Observer API](https://www.hweaver.com/intersection-observer-single-page-navigation/
