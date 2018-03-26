##Setup
* Ensure `node` is installed for best usage. Otherwise, `npm` is sufficient.
* `npm install`
* `npm start`
* Visit webpack dev server output (normally `localhost:8080`)
* A modern browser is advised. Babel setup is incomplete, sadly.

##Usage
UI should display a flex grid of face down cards.
Clicking on two cards should turn both face up for a second. If the cards match, then they will be matched and removed from the grid area.

A `div` labels how many cards have been matched and displays a winning message upon completion of the game.

##Explanation of Decisions
I opted for a bare minimum setup with webpack in order to save dev time.

I chose to start with larger modules in the beginning before breaking them down. I'm open to various approaches to naming/code organization.

##Follow Up
* Tests
