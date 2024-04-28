>**Note**: The code is formatted with 2 tab spaces indentation so it will appear weird on Github. Adding a sample screenshot in demo folder to show how it looks in VSCode.

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.
Create a new project using the following command to make sure your environment is ready.
```bash
npx react-native@latest init test
```
Once ready, clone the git repo into a new folder and run the following commands in your terminal to get all dependencies.

```bash
npm install
```

```bash
npx pod-install
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npx react-native start --experimental-debugger --reset-cache
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npx react-native run-android
```

### For iOS

```bash
# using npm
npx react-native run-ios
```

You can also run using Android studio/xCode in case any problem arises.

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.


## Evaluation checklist + User Stories and Functional Requirements + Bonus features

✅ Select a Subject from the list of Subjects available for the Grade they're currently enrolled in.
✅ View the Chapters and Lessons of a given Subject.
✅ Open a Lesson and begin studying the content (video, text, image, or quiz). Usually, opening a Lesson means you're beginning to browser through the Widgets of the Lesson, where each Widget is displayed on a single screen.
✅ Exit a Lesson halfway and return to it later, with the progress being saved and displayed in the UI on the home screen.
( currently I'm displaying it in the lesson list screen, in the selection box of each lesson).
✅ The progress of a Lesson is determined by the percentage of Widgets that have been completed inside that Lesson.
(instead of percentage, currently showing the last screen number of the lesson. e.g. user reaches screen 2/5, it shows "progress 2" on the lesson selection box).
✅ There is no need to persist progress to the backend. However, progress MUST be persisted in the device such that it's not lost when the app is closed and opened again.

✅ Your code should be written in React Native, using solid principles of software engineering and a robust state management framework.
✅ You must follow the best practices of React Native in your codebase.
✅ You must use a shared/central state. (used redux/rtk tolkit).

Show off your UI skills by building beautiful interfaces.
(Can be added later. Just added a nice background. Its too big of a project to implement nice designs and add structural functionalities in 2 days).

Create animations.
(can be added later)

✅ Add support for internationalization.
(added for menu screens. It can be switched on from the top right switch menu. Just need to add translations to make it functional across the app. )

## Submission Instructions

✅ Instructions on how to run the app from scratch
Added above.

✅ Screenshots of the views you created. Video demo is a bonus
Added in demo folder.

✅ Any assumptions you made to be able to complete this task
The API data was not exactly as expected, based on the description.
Assumed some of the API structure and implemented it accordingly.

✅ A summary of the technical choices you made in building the app and an explanation for why you did them.

1- React-navigation - Most stable and popular routing solution.
2- RTK (react redux toolkit) - for state management and API functionality.
3- i18n - for translation and language support.
4- linear-gradient - for gradient color containers (kids love this).
5- mmkv - for local storage. Its stable and can use encryption if required.
6- react-native-progress - for showing line based progress.
7- react-native-youtube-iframe - for showing youtube video content in the lessons.

✅ Future plans or things you would do differently or add if you had more time
Make a proper UI, use custom hooks, improve performance (useCallback/useMemo/useNativeDriver ...etc).

✅ Any stretch goals or bonus features you attempted
Added english/arabic language switcher. UI based goals require fine tuning, which needs more time.

✅ Any shortcuts you took or compromises you made
1- Added local storage get/set in less places than I wanted to.
2- Didn't add good looking UI or animations because of time constraint.
3- Didnt utilize custom hooks as I wanted to.
4- Didnt implement any performance improvement solutions.

✅ The total amount of time spent on this assessment
Approximately 2 days.

✅ Any resources, tools, frameworks, technologies you utilized in your solution.
Just React-Native with the basic required 3rd party libs to create a minimum solution.

✅ Anything else you'd like to share with us.
I have over 9 years of React-Native dev experience. I've worked with various frameworks and technologies over the years and I've made multiple kinds of apps (project management, education, gym/fitness, insurance related, B2B/B2C ...etc) so far and I would be excited to work on another education related app.





