const{test,expect}=require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { CartPage } = require('../Pages/CartPage');
const {CheckoutPage}=require('../Pages/CheckoutPage')
const invalidCheckoutData =[
    {
        name:"Without Valid Postal Code",
        firstName:'Hanan',
        lastName:'Issa',
        postalCode:'',
        error:'Error: Postal Code is required'
    },
    {
        name:"Without Valid firstName",
        firstName:'',
        lastName:'Issa',
        postalCode:'12345',
        error:'Error: First Name is required'
    },
    {
        name:"Without Valid Last Name",
        firstName:'Hanan',
        lastName:'',
        postalCode:'12345',
        error:'Error: Last Name is required'
    },
];
test.beforeEach(async({page})=>
{
await page.goto('https://www.saucedemo.com/');
 const loginPage=new LoginPage(page);
 const cartPage=new CartPage(page);
 await loginPage.login('standard_user','secret_sauce');
 await cartPage.addProductToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
 await page.locator('[data-test="shopping-cart-link"]').click();
}
)
test("Valid Checkout",async({page})=>
{
const checkoutPage=new CheckoutPage(page);
await checkoutPage.checkout();
 await expect(page).toHaveURL(/checkout-step-one.html/);
 await checkoutPage.fillCheckoutInfo('Hanan','Issa','12345');
 await expect(page.locator('[data-test="firstName"]')).toHaveValue('Hanan');
await expect(page.locator('[data-test="lastName"]')).toHaveValue('Issa');
await expect(page.locator('[data-test="postalCode"]')).toHaveValue('12345');
await checkoutPage.completeCheckout();
await checkoutPage.finish();
await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
}
);
invalidCheckoutData.forEach((data) =>{
test(`Invalid Checkout ${data.name}`,async({page})=>
{
const checkoutPage=new CheckoutPage(page);
await checkoutPage.checkout();
await expect(page).toHaveURL(/checkout-step-one.html/);
await checkoutPage.fillCheckoutInfo(data.firstName,data.lastName,data.postalCode)
await checkoutPage.completeCheckout();
await expect(page.locator('[data-test="error"]')).toHaveText(data.error);
}
);
});

