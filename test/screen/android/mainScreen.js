class MainScreen {
    get loginBtn() {
        return $("#lnk_MyBankLink")
    }

    get menu() {
        return $('.-close')
    }
}

module.exports = new MainScreen()