const { config } = require('./shared.conf')

config.specs = [
    '.././test/specs/android/bank.test.js'
];

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:platformVersion': '14.0',
        'appium:deviceName': 'Pixel 4 API 34',
        'appium:browserName': 'chrome'
    }]

config.port = 4723

exports.config = config;
