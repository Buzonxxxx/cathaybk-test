const CardIntroScreen = require("../../screen/android/cardIntroScreen");
const MainScreen = require("../../screen/android/mainScreen");
const SideMenu = require("../../screen/android/sideMenu");

describe('Cathay Bank Tests', () => {
    before(async () => {
        driver.url("https://www.cathaybk.com.tw/cathaybk/")
    })

    it('Capture screenshot on the home page', async () => {
        await MainScreen.isLoad()
        await driver.saveScreenshot('./mainPage.png');
    });

    it('Get options of credit section', async () => {
        await MainScreen.menu.click()

        await SideMenu.productIntro.waitForExist()
        await SideMenu.productIntro.click()

        await SideMenu.creditCard.waitForExist()
        await SideMenu.creditCard.click()

        await SideMenu.cardIntro.waitForDisplayed()
        await driver.saveScreenshot('./cardOptions.png');

        console.log("==========");
        console.log(`There are ${await SideMenu.cardOptions.length} credit card options`);
        console.log("==========");
    });

    it('Get terminated credit cards', async () => {
        
        await SideMenu.cardIntro.click()

        await CardIntroScreen.terminatedCardOption.scrollIntoView()
        await CardIntroScreen.terminatedCardOption.waitForDisplayed()
        await CardIntroScreen.terminatedCardOption.click()

        const terminatedCards = await CardIntroScreen.terminatedCards
        
        for (let i = 0; i < terminatedCards.length; i++) {
            await CardIntroScreen.terminatedCard(i+1).waitForDisplayed()

            await driver.saveScreenshot(`./terminatedCards${i+1}.png`);

            await CardIntroScreen.swipeLeftOnCard()
        }

        console.log("==========");
        console.log(`There are ${terminatedCards.length} terminated credit cards`);
        console.log("==========");
    });
})