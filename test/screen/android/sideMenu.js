class SideMenu {
    get productIntro() {
        return $('.cubre-o-nav__menu .cubre-o-menu__item:nth-of-type(1) .-l1')
    }

    get creditCard() {
        return $('.cubre-o-nav__menu .cubre-o-menu > div:nth-of-type(1) .cubre-o-menuLinkList__item:nth-of-type(1) .cubre-o-menuLinkList__btn .cubre-a-menuSortBtn')
    }

    get cardOptions() {
        return $$("/html/body//header[@class='cubre-o-header']//div[@class='cubre-o-menu']/div[1]/div[@class='cubre-o-menu__content']/div/div[1]/div[@class='cubre-o-menuLinkList__content']/a")
    }

    get cardIntro() {
        return $('.cubre-o-nav__menu .cubre-o-menu div:nth-of-type(1) .cubre-o-menuLinkList div:nth-of-type(1) .cubre-o-menuLinkList__content #lnk_Link:nth-child(2)')
    }
}

module.exports = new SideMenu()