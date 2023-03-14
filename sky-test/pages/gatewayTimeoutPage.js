const { expect } = require("@playwright/test")

exports.gatewayTimeoutPage = class gatewayTimeoutPage {
    constructor(page) {
        this.page = page
        this.gatewayTimeoutHeading = page.locator("h1")

    }

    async gatewayTimeoutTitle() {

        await this.gatewayTimeoutHeading.waitFor({ state: 'visible' });
        return await this.gatewayTimeoutHeading.isVisible();
    }
    async gatewayTimeoutURL() {
        await expect(this.page).toHaveURL(/.*gateway_timeout/)
    }


}