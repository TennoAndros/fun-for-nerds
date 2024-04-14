# Fun for Nerds - Angular Game

Welcome to "Fun for Nerds"! This game tests your understanding of Angular framework's Input and Output concepts within Components.

## Game Description

The game consists of 3 Components:

1. **InputWordComponent**: Here, the user starts typing a word in an HTML input element. Depending on the length of the word, it is "considered" to be passed as Input to either the `EvenLengthWordsComponent` or the `OddLengthWordsComponent`.
2. **EvenLengthWordsComponent and OddLengthWordsComponent**: These components display words entered by the user. The words are displayed in red color based on their length, alternating between these two components. When the user presses the "Submit" button, the word is "locked" into the component corresponding to its length.

## How to Play

1. Start typing a word in the input field.
2. Depending on the length of the word, it will appear in one of the word display components.
3. Words are displayed in red until the user submits them.
4. Press "Submit" to lock the word into the respective component.
5. The game keeps track of the words you've locked so far.

## Getting Started

To run this game locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `ng serve` to start the development server.
5. Open your browser and navigate to `http://localhost:4200/`.
6. Start playing and have fun!

## Technologies Used

- Angular
- HTML
- CSS

## Credits

This game is created by Andreas A.
