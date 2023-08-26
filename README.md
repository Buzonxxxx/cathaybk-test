# cathaybk-test
Test Cathay bank website using appium with JS

### Precondition
- Install Node.js v16 
    - suggest to use [NVM](https://github.com/nvm-sh/nvm)
- Install JDK 
    - `brew inistall openjdk@11`
- Install Android Studio
- setup `$JAVA_HOME` and `$ANDROID_HOME` as environment variables
- Create Android Emulator and launch it
- Install Appium Server
    - `npm i --location=global appium`
- Install Uiautomator2 driver
    - `appium driver install uiautomator2`
- Install Appium-Doctor to check the environment setup (optional) 
    - ```js
        npm install appium-doctor -g
        appium-doctor
        ```

### Environment Setup of this Repository
- Node.js v16.20.2
- OpenJDK v11.0.20.0
- Android Studio Giraffe | 2022.3.1 Patch 1Android Studio
- Android Emulator Pixel 4, API 34, OS 14.0 
- Appium Server v2.1.3
- UiAutomator2 v2.29.5


### Run Steps
- Clone the repository
- Install dependencies
    - `npm i`
- Launch Android Emulator
- Launch Appium Server
    - `appium   `
- Execute test
    - `npx wdio`
