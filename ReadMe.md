# Whatsapp Clone Project

https://youtu.be/YPSjNIJEdXU?t=9046

Practice Project following the [Esteban Codes Tutorial](https://www.youtube.com/watch?v=YPSjNIJEdXU)

## Description

Building a clone of WhatsApp, with authentication and image uploads.<br>
Using: react native, expo, firebase, react navigation.

## Getting Started

### Dependencies

* Windows 10
* [Visual Studio Code ](https://code.visualstudio.com/)
* [Android Studio](https://developer.android.com/studio)
* [Node.js](https://nodejs.org/)

### Installing

* ```
  cd C:\Users\<USER NAME>\Documents\wp-clone\
  ```
* ```
  npm install --location=global expo-cli
  ```
* ```
  npm install
  ```

### Android Studio

* Install Android Studio
* `More Actions-->Virtual Device Manager`
* Create devices:
    1. Nexus 5X API 30 - Android 11.0
    2. Pixel 3a API 30 - Android 11.0
* Run both devices

### Firebase

* Go to [https://console.firebase.google.com/](https://console.firebase.google.com/)
* `+ Add project`
* Project name: `wp-clone..` .
* Disable Google Analytics for this project --> Create Project .
* Create new file: `firebase.js` .
* Click `Get started by adding Firebase to your app` --> `Web` --> App nickname `Rn- client` --> `Register app` .
* Copy the produced code snippet and paste it in `firebase.js` .
* Continue to console
* `Build` --> `Authentication`
    * Get Started
    * Sign-in providers: Email/Password --> Enable --> Save
* `Build` --> `Storage`
    * Get Started
    * Next --> Cloud Storage Location: `eur3 (europe-west)` --> Done
* `Build` --> `Firestore Database`
    * Create Database
    * Next --> Cloud Storage Location: `eur3 (europe-west)` --> Enable

### Executing program

* ```
  cd C:\Users\<USER NAME>\Documents\wp-clone\
  ```
* ```
  npm run start
  ```
* Open [Expo Developer Tools](http://localhost:19002/) --> `Run on Android device/emulator`

## Authors

* Author: Florina Biletsiou <br>
[@fbiletsiou](https://twitter.com/fbiletsiou)

* Instructor: Esteban Torres <br>
[@esteban_codes](https://twitter.com/esteban_codes)

## Acknowledgments

* Followed tutorial:  [3stbn/wp-clone](https://github.com/3stbn/wp-clone)
