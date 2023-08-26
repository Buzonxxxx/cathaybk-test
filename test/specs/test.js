describe('Cathay Bank Tests', () => {
    it('Capture screenshot on the home page', async () => {
        driver.url("https://www.cathaybk.com.tw/cathaybk/")
        
        // isLoad()
        const loginButton = await $("#lnk_MyBankLink")
        await expect(loginButton).toBeDisplayed()

        // loginButton.waitForDisplayed({ timeout: 3000 })
        // await driver.saveScreenshot('./mainPage.png');
    });

    it('Get options of credit section', async () => {
        driver.url("https://www.cathaybk.com.tw/cathaybk/")
        // menu
        await $('.-close').click()
        // productIntro
        await $('.cubre-o-nav__menu .cubre-o-menu__item:nth-of-type(1) .-l1').click()
        // credit card
        await $('.cubre-o-nav__menu .cubre-o-menu > div:nth-of-type(1) .cubre-o-menuLinkList__item:nth-of-type(1) .cubre-o-menuLinkList__btn .cubre-a-menuSortBtn').click()

        const cardOptions = await $$("/html/body//header[@class='cubre-o-header']//div[@class='cubre-o-menu']/div[1]/div[@class='cubre-o-menu__content']/div/div[1]/div[@class='cubre-o-menuLinkList__content']/a")
        console.log("========");
        console.log(`There are ${cardOptions.length} credit card options`);
        console.log("========");

        await driver.saveScreenshot('./cardOptions.png');
    });

    it.only('Get terminated credit cards', async () => {
        driver.url("https://www.cathaybk.com.tw/cathaybk/")
        // menu
        await $('.-close').click()
        // productIntro
        await $('.cubre-o-nav__menu .cubre-o-menu__item:nth-of-type(1) .-l1').click()
        // credit card
        await $('.cubre-o-nav__menu .cubre-o-menu > div:nth-of-type(1) .cubre-o-menuLinkList__item:nth-of-type(1) .cubre-o-menuLinkList__btn .cubre-a-menuSortBtn').click()
        // card intro
        await $('.cubre-o-nav__menu .cubre-o-menu div:nth-of-type(1) .cubre-o-menuLinkList div:nth-of-type(1) .cubre-o-menuLinkList__content #lnk_Link:nth-child(2)').click()
        // terminated card
        await $('section:nth-of-type(6) .cubre-a-iconTitle__text').scrollIntoView()

        const terminatedCards = await $$("/html/body//article[@class='cubre-o-content']/section[6]//div[@class='cubre-o-block__component']/div/div[@class='swiper-wrapper']/div")
        console.log("========");
        console.log(`There are ${terminatedCards.length} terminated credit cards`);
        console.log("========");
        
        // ToDo: get terminated cards' screenshot

        // await driver.pause(1000);
        // await driver.saveScreenshot('./terminatedCards.png');
    });
})