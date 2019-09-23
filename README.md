# Simple React Native App

The purpose of this lab is to install React Native CLI, install either XCode or Android Studio to setup your virtual device, and successfully run your first barebones TypeScript Native app!!

# Steps

*Installing React Native CLI*

- Use the video walkthrough and reference materials to install the React Native CLI
- Use the "Building Projects with Native Code" tab in the Getting Started section of the React Native documentation
 - It is well maintained and kept up to date, much better than a recorded video could!

*Initializing Your First Native App*

- Use react-native init MyApp --template typescript to initialize a new native app
 - Decide to either stick with yarn as your package manager, or use npm by following the instructions from the walkthrough/reference material
- cd into the directory, and get your app running in your simulator using react-native run-android or react-native run-ios
 - Don't forget for Android, the simulator must be running first!

*Let's Explore!*
- Use a REST API endpoint from JSON Placeholder to fetch some data, and set it to state
- Safely type your state based on your chosen API endpoint
- Map through your state in your render/return method
- Display at least one property from the objects on your screen
- Add some styling to your taste

Take notice that the general "workflow" of information in your React Native project is almost the same you've been doing up till this point. The only difference will be how you display the information using native components instead.
