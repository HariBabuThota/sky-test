const { test, expect } = require('@playwright/test')
import { commonElementsPage } from '../pages/commonElementsPage';
import { homepage } from '../pages/homepage';
import { madeupPage } from '../pages/madeupPage';
import { badRequestPage } from '../pages/badRequestPage';
import { internalServerErrorPage } from '../pages/internalServerErrorPage';
import { forbiddenPage } from '../pages/forbiddenPage';
import { gatewayTimeoutPage } from '../pages/gatewayTimeoutPage';
import { noResponsePage } from '../pages/noResponsePage';
import { unauthorizedPage } from '../pages/unauthorizedPage';

test('Open herokuapp', async ({ page }) => {

    const home = new homepage(page)
    const madeUp = new madeupPage(page)
    const badRequest = new badRequestPage(page)
    const internalServerError = new internalServerErrorPage(page)
    const commonElements = new commonElementsPage(page)
    const forbidden = new forbiddenPage(page)
    const gatewayTimeout = new gatewayTimeoutPage(page)
    const noResponse = new noResponsePage(page)
    const unauthorized = new unauthorizedPage(page)

    //visit to the website
    await page.goto('/?');

    //click on madeup link and verify page redirect to madeup page
    await home.selectMadeupLink()
    await madeUp.madeupTitle()
    await madeUp.madeupURL()
    await commonElements.selectReturnToHome()

    //click on internal server error link and verify page redirect to correct page
    await home.selectInternalServerErrorLink()
    await internalServerError.internalServerErrorTitle()
    await internalServerError.internalServerErrorURL()
    await commonElements.selectReturnToHome()

    //click on unauthorized link and verify page redirect to correct page
    await home.selectUnauthorisedLink()
    await unauthorized.unauthorizedTitle()
    await unauthorized.unauthorizedURL()
    await commonElements.selectReturnToHome()

    //click on no response link and verify page redirect to correct page
    await home.selectNoResponseLink()
    await noResponse.noResponseTitle()
    await noResponse.noResponseURL()
    await commonElements.selectReturnToHome()

    //click on bad request link and verify page redirect to correct page
    await home.selectBadRequestLink()
    await badRequest.badRequestTitle()
    await badRequest.badRequestURL()
    await commonElements.selectReturnToHome()

    //click on forbidden link and verify page redirect to correct page
    await home.selectForbiddenLink()
    await forbidden.forbiddenTitle()
    await forbidden.forbiddenURL()
    await commonElements.selectReturnToHome()

    //click on select gatewat timeout link and verify page redirect to correct page
    await home.selectGatewayTimeout()
    await gatewayTimeout.gatewayTimeoutTitle()
    await gatewayTimeout.gatewayTimeoutURL()
    await commonElements.selectReturnToHome()

});