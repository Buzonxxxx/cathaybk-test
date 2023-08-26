class CardIntroScreen {
    get terminatedCardOption() {
        return $('a:nth-of-type(6) > p')
    }

    get terminatedCards() {
        return $$("/html/body//article[@class='cubre-o-content']/section[6]//div[@class='cubre-o-block__component']/div/div[@class='swiper-wrapper']/div")
    }

    terminatedCard(num) {
        return $(`/html/body//article[@class='cubre-o-content']/section[6]//div[@class='cubre-o-block__component']/div/div[@class='swiper-wrapper']/div[${num}]`)
    }

    async swipeLeftOnCard() {
        await driver.touchAction([
            { action: 'press', x: 855, y: 1025 },
            { action: 'moveTo', x: 224, y: 1019 },
            'release'
        ]);
    }
}

module.exports = new CardIntroScreen()