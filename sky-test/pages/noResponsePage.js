const { expect } = require("@playwright/test")

exports.noResponsePage = class noResponsePage {
    constructor(page) {
        this.page = page
        this.noResponseHeading = page.locator("h1")

    }

    async noResponseTitle() {

        await this.noResponseHeading.waitFor({ state: 'visible' });
        return await this.noResponseHeading.isVisible();
    }
    async noResponseURL() {
        await expect(this.page).toHaveURL(/.*no_response/)
    }


}