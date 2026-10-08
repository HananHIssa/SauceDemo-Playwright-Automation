/** @typedef {import('@playwright/test').Page} Page */
class CartPage{
        /** @param {Page} page */
    constructor(page)
    {
        this.page=page;
    }
    async addProductToCart(locator)
    {
        await this.page.locator(locator).click();
    }
    async removeProductFromCart(locator)
    {
        await this.page.locator(locator).click();
    }
}
module.exports={CartPage};