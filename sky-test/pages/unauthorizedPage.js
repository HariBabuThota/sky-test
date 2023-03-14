const { expect } = require("@playwright/test")

exports.unauthorizedPage = class unauthorizedPage {
    constructor(page) {
        this.page = page
        this.unauthorizedHeading = page.locator("h1")

    }

    async unauthorizedTitle() {

        await this.unauthorizedHeading.waitFor({ state: 'visible' });
        return await this.unauthorizedHeading.isVisible();
    }
    async unauthorizedURL() {
        await expect(this.page).toHaveURL(/.*unauthorized/)
    }


}