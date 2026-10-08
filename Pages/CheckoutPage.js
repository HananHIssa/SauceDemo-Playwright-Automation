/** @typedef {import('@playwright/test').Page} Page */
class CheckoutPage{
 /** @param {Page} page */
    constructor(page)
    {
      this.page=page;
    }
    async checkout()
    {
       await this.page.locator('[data-test="checkout"]').click();
    }
    async fillCheckoutInfo(firstName,lastName,postalCode)
    {
       await this.page.locator('[data-test="firstName"]').fill(firstName);
       await this.page.locator('[data-test="lastName"]').fill(lastName);
       await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    }
    async completeCheckout()
    {
    await this.page.locator('[data-test="continue"]').click();
    }
    async finish(){
    await this.page.locator('[data-test="finish"]').click();
    }
}
module.exports={CheckoutPage};