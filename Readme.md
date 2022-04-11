# MovieDBApp

https://github.com/himanshu1721/MovieDB/tree/develop

**Project Name**: `MovieDB`

**Bundle Id**: `org.reactjs.native.example.MovieDB` **Package Name**: `com.moviedb`

[![react-native](https://img.shields.io/badge/react--native-67.0.3-brightgreen)](https://facebook.github.io/react-native/docs/0.67/getting-started)

---
## Project Description
MovieDB is a mobile application for Android and ios devices, to show the latest and trending Movies and TV shows. It also provides the list of movies and TV shows which are around the theatres or are free to watch. Overview and movie ratings can also be accessed by tapping on the content. Latest Trailers can also be viewed on our App. The content is updated everyday.

## Prerequisites
**iOS** : XCode(13.1) onwards
**Android** : Android Studio Arctic Fox(2020.3.1) with gradle(7.2-all) onwards
**Editor** : Visual Studio Code

## How to Setup Project
**Step 1:** Clone this repository.
**Step 2:** Go to the cloned repo and open it in terminal.
**Step 3:** Install the dependencies with `$ npm i`
**Step 4:** Go to ios folder `$ cd ios`
**Step 5:** Run the command to install the cocoapods `$ pod install`
**Step 6:** Back into the project folder `$ cd ..`

## How to Run the Project
1. Open the project directory in to terminal
2. Run and build for either OS
   - Run iOS app
     ```
     npx react-native run-ios
     ```
   - Run Android app
     ```
     npx react-native run-android
     ```
   - Note: This npm scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise, it will show the lint errors in the terminal.

## Coding Style used
This project adheres to JavaScript Standard for codinng style. To maintain coding standards, utilising features of ES6 and follow best development practices of react-native, this project also uses [ES6](http://es6-features.org/#Constants), some rules of [eslint-airbnb](https://github.com/airbnb/javascript), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native).
**Do not disable lint inside the code. Try to understand the rule and then follow it into your code. Disabling lint will be considered a violation of coding standards. Exceptions will be allowed by the code-reviewer and team lead after understanding the need to ignore lint.**

1. **To Lint**
   Use the npm script `lint`. To run it
```
  npm lint
```
2. **Auto Lint on Commit**
   This is implemented using [husky](https://github.com/typicode/husky). So husky will prevent code-cmmits having lint errors. There is no additional setup needed.
3. **Understanding Linting Errors**
   The linting rules are from JS Standard and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).


## List of all dependencies used in the project with their usage

- **Framework:**
  - [React Native](https://github.com/facebook/react-native)

- **State management libraries:**
  - [Redux](http://redux.js.org/), [React Redux](https://react-redux.js.org/), [Redux Persist](https://github.com/rt2zz/redux-persist), [Seamless-Immutable](https://github.com/rtfeldman/seamless-immutable), [ramda](https://ramdajs.com/)

- **API & Middleware libraries:**
  - [API Sauce](https://github.com/infinitered/apisauce), [Redux Sauce](https://github.com/jkeam/reduxsauce), [Redux Saga](https://redux-saga.js.org/)

- **Libraries used for navigation:**
  - [react-navigation](https://github.com/react-navigation/react-navigation), [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler), [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated), [react-navigation-stack](https://github.com/react-navigation/stack), [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)

- **Libraries used for storage:**
  - [react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)

- **Libraries used for circular progress indicator:**
  - [react-native-progress-circle](https://github.com/MrToph/react-native-progress-circle)

- **Libraries used for splash screen:**
  - [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)

## Troubleshoot Notes
- There are no known issues for run or build processes right now.
## Notes
_for build releases branch develop._
- Release builds are distributed from develop-release branch and all pull requests are done to develop branch.