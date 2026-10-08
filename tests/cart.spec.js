const{test,expect}=require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { CartPage } = require('../Pages/CartPage');
test.beforeEach(async({page})=>{
 await page.goto('https://www.saucedemo.com/');
const loginpage=new LoginPage(page);
await loginpage.login('standard_user','secret_sauce');
}
)
test('Valid Add To Cart',async({page})=>
{  
   const cartpage=new CartPage(page);
   await cartpage.addProductToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
   await page.locator('[data-test="shopping-cart-link"]').click();
   await expect(page).toHaveURL(/cart.html/);
   await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
   await expect(page.locator('[data-test="item-quantity"]')).toHaveText('1');
}
)
test('Valid Remove From Cart',async({page})=>
{  
   const cartpage=new CartPage(page);
   await cartpage.addProductToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
   await page.locator('[data-test="shopping-cart-link"]').click();
   await cartpage.removeProductFromCart('[data-test="remove-sauce-labs-backpack"]');
   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
   await expect(page.locator('[data-test="inventory-item-name"]')).toHaveCount(0);
}
)