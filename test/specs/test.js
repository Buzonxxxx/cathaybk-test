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
        
        // const firstCardImg = await $("/html/body//article[@class='cubre-o-content']/section[6]/div[@class='cubre-o-block__wrap']//div[@class='swiper-wrapper']/div[1]//div[@class='cubre-m-compareCard__pic']/img")

        // 停發卡
        await $('a:nth-of-type(6) > p').scrollIntoView()
        await driver.pause(3000);
        await $('a:nth-of-type(6) > p').click()

        // terminated cards
        const terminatedCards = await $$("/html/body//article[@class='cubre-o-content']/section[6]//div[@class='cubre-o-block__component']/div/div[@class='swiper-wrapper']/div")
        
        // scroll left on card img
        for (let i = 0; i < terminatedCards.length; i++) {
            await driver.pause(2000);

            await driver.saveScreenshot(`./terminatedCards${i+1}.png`);

            await driver.touchAction([
                {action: 'press', x: 855, y: 1025},
                {action: 'moveTo', x: 224, y: 1019},
                'release'
              ]);
        }

        console.log("========");
        console.log(`There are ${terminatedCards.length} terminated credit cards`);
        console.log("========");
    });
})