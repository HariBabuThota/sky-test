const { expect } = require("@playwright/test")

exports.madeupPage = class madeupPage {
    constructor(page) {
        this.page = page
        this.madeupHeading = page.locator("h1")

    }

    async madeupTitle() {

        await this.madeupHeading.waitFor({ state: 'visible' });
        return await this.madeupHeading.isVisible();
    }
    async madeupURL() {
        await expect(this.page).toHaveURL(/.*madeup/)
    }


}