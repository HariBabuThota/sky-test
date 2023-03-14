const { expect } = require("@playwright/test")
exports.homepage = class homePage {


    constructor(page) {
        this.page = page
        this.madeup = page.getByRole('link', { name: '/madeup' })
        this.internalServerError = page.getByRole('link', { name: '/internal_server_error' })
        this.unauthorized = page.locator('#margin > ul:nth-child(6) > li:nth-child(3) > a:nth-child(1)')
        this.noResponse = page.getByRole('link', { name: '/no_response' })
        this.badRequest = page.getByRole('link', { name: '/bad_request' })
        this.forbidden = page.getByRole('link', { name: '/forbidden' })
        this.gatewayTimeout = page.getByRole('link', { name: '/gateway_timeout' })
    }

    async selectMadeupLink() {
        await this.madeup.click();
    }
    async selectInternalServerErrorLink() {
        await this.internalServerError.click();
    }
    async selectUnauthorisedLink() {
        await this.unauthorized.click();
    }
    async selectNoResponseLink() {
        await this.noResponse.click()
    }
    async selectBadRequestLink() {
        await this.badRequest.click()
    }
    async selectUnauthorisedTwoLink() {
        await this.unauthorisedTwo.click()
    }
    async selectForbiddenLink() {
        await this.forbidden.click()
    }
    async selectGatewayTimeout() {
        await this.gatewayTimeout.click()
    }
}