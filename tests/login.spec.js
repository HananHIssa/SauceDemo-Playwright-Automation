const{test,expect}=require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const invalidLoginData=[
    {
        name:'Without Valid User Name',
        username:'standarduser',
        password:'secret_sauce',
        error:'Epic sadface: Username and password do not match any user in this service'
    },
    {
        name:'With Empty User Name',
        username:'',
        password:'secret_sauce',
        error:'Epic sadface: Username is required'
    }
    ,
    {
        name:'Without Valid Password',
        username:'standard_user',
        password:'secretsauce',
        error:'Epic sadface: Username and password do not match any user in this service'

    },
    {
        name:'With Empty Password',
        username:'standard_user',
        password:'',
        error:'Epic sadface: Password is required'
    }
];
test.beforeEach(async({page})=>
{
 await page.goto('https://www.saucedemo.com/');
});
test("Valid Login",async({page})=>
{
    const loginPage=new LoginPage(page);
    await loginPage.login('standard_user','secret_sauce');   
    await expect(page).toHaveURL(/inventory.html/);
}
);
invalidLoginData.forEach((data)=>
{
test(`Invalid Login ${data.name}`,async({page})=>
{
    const loginPage=new LoginPage(page);
    await loginPage.login(data.username,data.password);
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText(data.error);
});
});

