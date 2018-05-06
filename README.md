
# Workout-app --> CUT? getCut? repIt? 

## Overview
Simple app for quickly and easily recording info during your workouts at the gym (e.g. chest fly, 4 sets of 10 reps, 150 lbs.)


### Key Features
```
- Ability to easily log an exercise after completion while at 
  the gym
    - include option to edit/delete a previous entry
- mobile responsive design
- ability to view  previous “checkins” and exercise log history
    - include filtering & sorting capabilities (e.g. sort by date, filter: bicep curls)
- provide stats based on user previous logs/exercises
- provide recommendations/challenges for increasing weights each time
- use charts library for stats data/viz 
- could track all sorts of stats:
    - frequency of user “checkins” (e.g. average of 3 activities per week, etc…)
    - set, rep, & workout counts for each exercise
- could filter by category like upperbody/lowerbody/date range
```


## Categories
```
    - quads
    - hams
    - calves
    - pelvis/waist
    - abs
    - chest
    - upper back
    - lower back
    - triceps
    - biceps
    - shoulders
```


## Exercises
```
    - bench press
    - chest fly
    - lat pulldown
    - row
    - shoulder press
    - military press
    - shoulder fly
    - shoulder shrug
    - pushup
    - pull up
    - tricep extension
    - tricep pushdown
    - bicep curls
    - wrist curls
    - situp
    - stomach crunch
    - torso rotation
    - back extension
    - deadlift
    - good-morning
    - lunge
    - squat
    - leg extension
    - leg press
    - leg curl
    - calf raise
```

## Folder Structure

```
project3_WorkoutApp/
  README.md
  client/
    node_modules/
    package.json
    public/
      index.html
      favicon.ico
    src/
      actions.js
      actions.test.js
      App.css
      App.js
      App.test.js
      Day.jsx
      Detail.jsx
      DetailContainer.jsx
      index.css
      index.js
      logo.svg
      reducer.js
      reducer.test.js
      registerServiceWorker.js
      SaveButton.jsx
      selectors.js
      selectors.test.js
      Week.jsx
      WeekContainer.jsx
    server/
      .nyc_output/
      coverage/
        base.css
        block-navigation.js
        index.hmtl
        prettify.js
        server.js.html
        sorter.js
      node_modules/
      public/
        build/
          static/
            css/
            js/
          asset-manifest.json
          favicon.ico
          index.html
          manifest.json
          service-worker.js
        staic/
          css/
          js/
        asset-manifest.json
        favicon.ico
        index.html
        manifest.json
        service-worker.js
      test/
        helloworld.js
      .eslintrc.json
      index.js
      package.json
      server.js

```


## Database Schema

### Tables
```
- user
    - user_id
    - username
    - email
    - height
    - weight
    - age
    - goal (weight loss, regular fitness/exercise, tone, body building)

- exercise
    - exercise_id
    - exercise_name
    - exercise_description
    - category_id
    - category_name

- category
    - category_id
    - category_name
    - category_description

- logs
    - log_id
    - log_date
    - log_exercise
    - log_weight
    - log_sets
    - log_reps

- challenges (stretch goal)
    - id
    - name
    - type
    - description
    - points
```


For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```

This works for any library, not just `react-router`.

## Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

### `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
```

### `DangerButton.js`


```js
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```


### With React Router

If you are using React Router check out [this tutorial](http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html) on how to use code splitting with it. You can find the companion GitHub repository [here](https://github.com/AnomalyInnovations/serverless-stack-demo-client/tree/code-splitting-in-create-react-app).

Also check out the [Code Splitting](https://reactjs.org/docs/code-splitting.html) section in React documentation.

## Adding a Stylesheet

This project setup uses [Webpack](https://webpack.js.org/) for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**:

### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

**This is not required for React** but many people find this feature convenient. You can read about the benefits of this approach [here](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b). However you should be aware that this makes your code less portable to other build tools and environments than Webpack.

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified `.css` file in the build output.

If you are concerned about using Webpack-specific semantics, you can put all your CSS right into `src/index.css`. It would still be imported from `src/index.js`, but you could always remove that import if you later migrate to a different build tool.
