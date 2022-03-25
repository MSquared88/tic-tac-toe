## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run sass`

You must have sass globally installed for this to work.

### The challenge

Users should be able to:
View the optimal layout for the game depending on their device's screen size

- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- **Bonus 1**: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2**: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
/* went from this */
height: 20vw;
width: 20vw;
min-width: 96px;
min-height: 64px;
max-width: 140px;
max-height: 72px;

/* to this with both width and height*/
width: clamp(328px, 63%, 460px);

/* having the boxes resize smoothly instead of rigid media quries was great. */
```

### Continued development

I met an mvp of having a tic-tac-toe game that tracks score and can be reset.

In the future I would complete the player vs computer functionality.

## Author

- Website - [Matthew Meeves](https://www.matthewmeeves.com/)
