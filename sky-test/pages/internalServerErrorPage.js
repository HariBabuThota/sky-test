const { expect } = require("@playwright/test")

exports.internalServerErrorPage = class internalServerErrorPage {
    constructor(page) {
        this.page = page
        this.internalServerErrorHeading = page.locator("h1")

    }

    async internalServerErrorTitle() {

        await this.internalServerErrorHeading.waitFor({ state: 'visible' });
        return await this.internalServerErrorHeading.isVisible();
    }
    async internalServerErrorURL() {
        await expect(this.page).toHaveURL(/.*internal_server_error/)
    }


}