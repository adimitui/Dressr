# Dressr

## Clone the repository

Click on the "Clone or download" button and clone the repository.

`git clone https://github.com/adimitui/Dressr.git`

## Ionic Framework

Install Ionic. Learn more about the Ionic framework at http://www.ionicframework.com/.

`npm install -g cordova ionic`

Install all dependencies before running the app.

`npm install`

View the Ionic app in the browser.

`ionic serve`

Connect the device to the computer. Make sure USB Debugging is allowed. 

If using an iPhone, substitute `android` with `ios`. In order to build on an Android phone, users are required to install (1) [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html), (2) [Android Studio](https://developer.android.com/studio/index.html), and (3) [updated Android SDK tools](https://developer.android.com/studio/intro/update.html).

For more information on requirements to build on an iPhone, check out the [Ionic docs](http://ionicframework.com/docs/intro/deploying/).

`ionic cordova run android --device`

## Ionic Framework Plugins

Camera

`ionic cordova plugin add cordova-plugin-camera`
`npm install --save @ionic-native/camera`

Camera Preview

`ionic cordova plugin add cordova-plugin-camera-preview`
`npm install --save @ionic-native/camera-preview`

Base64 to Gallery
`ionic cordova plugin add cordova-base64-to-gallery`
`npm install --save @ionic-native/base64-to-gallery`