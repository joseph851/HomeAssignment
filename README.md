# Home Assignment

## Before you get start

 * Download Xcode.
    * Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
 * Download and install Android Studio.
    * Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:
        * Android SDK
        * Android SDK Platform
        * Performance (Intel ® HAXM)
        * Android Virtual Device
 * Install Java (JDK, currently works with 11 or less)
 * Configure the ANDROID_HOME environment variable.
   React Native tools require some environment variables to be set up in order to build apps with native code.
   
   Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc config file:
   
   ```
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   
 * Create emulator on Android Studio: https://developer.android.com/studio/run/managing-avds#createavd
    * If AVD Manager is not an option from `Tools > AVD Manager` you can access AVD Manager by starting Android Studio and click `Configure > AVD Manager`  
 * Install CocoaPods globally: ```sudo gem install cocoapods```

## First run
1. Cloning ``HomeAssignment`` Git repository to your projects folder:
    * ``git clone https://github.com/adiBinen/HomeAssignment.git``
    * ```cd HomeAssignment```
2. Install dependencies and required modules:
    * ```npm install```
    * ```cd ios``` 
    * ```pod install```
4. Build and serve :
    ```npm run ios``` or ```npm run android```
    * This will launch the relevant emulator and terminal with the message `Loading dependency graph, done`.
    * After that message, you might get an error message on the emulator that says `No bundel URL present`. Click on 'Reload' button (`cmd + R`) in the emulator and you should be able to see the app.
    * The app will automatically reload if you change any of the source files.
         
    
