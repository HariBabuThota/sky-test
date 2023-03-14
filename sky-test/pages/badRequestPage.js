const { expect } = require("@playwright/test")

exports.badRequestPage = class badRequestPage {
    constructor(page) {
        this.page = page
        this.badRequestHeading = page.locator("h1")

    }

    async badRequestTitle() {

        await this.badRequestHeading.waitFor({ state: 'visible' });
        return await this.badRequestHeading.isVisible();
    }
    async badRequestURL() {
        await expect(this.page).toHaveURL(/.*bad_request/)
    }


}