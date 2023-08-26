describe('Cathay Bank Tests', () => {
    it('Capture screenshot on the home page', async () => {
        driver.url("https://www.cathaybk.com.tw/cathaybk/")
        await driver.pause(1000);
        await driver.saveScreenshot('./screenshot.png');
    });
})