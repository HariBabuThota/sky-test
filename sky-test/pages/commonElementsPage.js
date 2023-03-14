exports.commonElementsPage = class commonElementsPage {
    constructor(page) {
        this.page = page
        this.returnToHome = page.getByRole('button', { name: 'Return To Home Page' })

    }

    async selectReturnToHome() {

        await this.returnToHome.click()
    }
    async landingPage() {
        await expect(this.page).toHaveURL(/.*/)
    }


}