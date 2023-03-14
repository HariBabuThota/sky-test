const { expect } = require("@playwright/test")

exports.forbiddenPage = class forbiddenPage {
    constructor(page) {
        this.page = page
        this.forbiddenHeading = page.locator("h1")

    }

    async forbiddenTitle() {

        await this.forbiddenHeading.waitFor({ state: 'visible' });
        return await this.forbiddenHeading.isVisible();
    }
    async forbiddenURL() {
        await expect(this.page).toHaveURL(/.*forbidden/)
    }


}