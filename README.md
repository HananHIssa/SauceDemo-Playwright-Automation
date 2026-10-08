# SauceDemo Playwright Automation

## Project Overview

This project contains automated UI tests for the [SauceDemo](https://www.saucedemo.com/) website using Playwright with JavaScript.

The tests cover login, shopping cart, and checkout functionality.

## Technologies Used

- JavaScript
- Node.js
- Playwright Test
- Page Object Model (POM)

## Test Scenarios

### Login (5 Tests)
- Login with valid credentials
- Login with an invalid username
- Login with an empty username
- Login with an invalid password
- Login with an empty password

### Shopping Cart (2 Tests)
- Add a product to the cart and verify its details
- Remove a product from the cart

### Checkout (4 Tests)
- Complete checkout with valid information
- Checkout with an empty postal code
- Checkout with an empty first name
- Checkout with an empty last name

**Total: 11 automated tests**

## Testing Techniques

- **Page Object Model (POM):** Separates page interactions from test cases.
- **Data-Driven Testing:** Uses arrays of test data to generate multiple login and checkout tests.
- **Positive and Negative Testing:** Covers valid and invalid user inputs.
- **Assertions:** Verifies URLs, element visibility, text, values, and element counts.
- **beforeEach Hooks:** Prepares the required page state before tests.

## Project Structure

```text
SauceDemo-Playwright-Automation/
├── Pages/
│   ├── LoginPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── tests/
│   ├── login.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How to Run

**1. Install dependencies**

```bash
npm install
```

**2. Install Playwright browsers**

```bash
npx playwright install
```

**3. Run all tests**

```bash
npx playwright test
```

**4. Run tests in headed mode**

```bash
npx playwright test --headed
```

**5. View the HTML report**

```bash
npx playwright show-report
```

## Test Website

https://www.saucedemo.com/