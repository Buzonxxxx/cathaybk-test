class MainScreen {
    get loginBtn() {
        return $("#lnk_MyBankLink")
    }

    get menu() {
        return $('.-close')
    }

    async isLoad() {
        await this.loginBtn.waitForExist()
        await this.menu.waitForExist()
    }
}

module.exports = new MainScreen()