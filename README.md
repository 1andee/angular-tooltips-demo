# xello-takehome

Made with [Angular Webpack Starter](https://github.com/gdi2290/angular-starter)

### Functional Requirements
- Single page Angular 4+ app with simple routing that has one state/view
- Place two buttons that when clicked; show a tooltip above the button with some text in it.
- When button A is clicked, if button B’s tooltip is open it should close and vice versa (only one tooltip should be visible at a time)
- Either tooltip should close when clicked anywhere outside of it, but remain open if clicked inside.
- Either tooltip should close when ESC key is pressed.
- Tooltip functionality should be written as a reusable component
- The reviewer should be able to run your solution with a simple npm command

**BONUS**
- If you scroll down to an open tooltip, it should detect being at the edge of the screen and change position to be below the button
- Style using Bootstrap SASS
- Add at least one accessibility feature

### Quick start
**Make sure you have Node version >= 8.0 and (NPM >= 5 or [Yarn](https://yarnpkg.com) )**

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/gdi2290/angular-starter.git

# change directory to our repo
cd angular-starter

# install the repo with npm
npm install

# start the server
npm start
```

# License
 [MIT](/LICENSE)
