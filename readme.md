## Web Accessibility Test Tool

This repository contains boilerplate project for Web Accessibility Testing. It uses `webdriver.io` for functional automated testing and `web-accssbility-test` which is an accessibility testing engine for websites and other HTML-based user interfaces. It shows hints which internally run the recommended set of WCAG 2.1 Level A and Level AA rules from axe-core and generates `Allure` report for your accessibility test.

### Installation

This project is tested on Node v12.0.0. While earlier versions of node may be compatible, they have not been tested or verified.

`Node.JS:` Node must be installed; please follow the directions at http://www.nodejs.org to install it.

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is required to start `Selenium Server` for multi browser testing. If you only wish to run test on `chrome` browser using ChromeDriver then ignore this step.

Now navigate to the boilerplate project's package.json folder and run `npm install` to grab all dependencies.

### Run Some Sample Tests
To execute the entire test suite in local development, execute command  `npm run test`.

### Config Files
WebdriverIO uses configuration files to setup and execute tests in specific ways. The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite. Config files (wdio.conf.js) can be found in the /test/config/ directory.

### Reporters
WebdriverIO uses several different types of test reporters to communicate pass/failure.

#### Spec
Test reporter, that prints detailed results to console.

#### Allure
The Allure Reporter creates Allure test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. To generate and view an allure report, execute command  `npm run report`.

### Using Mocha JavaScript framework
Tests are written in the Mocha framework. More about Mocha can be found at https://mochajs.org/
Tests are place in .specs.ts files in the /test/specs/ directory. A typical test will look similar to this:

```
describe('Web Accessibility Test', () => {

	it('checks for any WCAG violations', () => {
		browser.url('/');    			 //add any additional path/endpoint to baseURL.
		let result = wat.getViolations();
    console.log(result);
		expect(result.violations.length).to.be.equal( 0,`${browser.getUrl()} doesn't pass Accessibility Test`);
	});

	it('list out all the rules of WCAG', () => {
		browser.url('/');     		//add any additional path/endpoint to baseURL.
    let result = wat.getRules();
    console.log(result);
	});

	it('list out the WCAG best practice', () => {
		browser.url('/');     		//add any additional path/endpoint to baseURL.
		let result = wat.getBestPractice();
		console.log(result);
	});
});
```
### Contribution
Create a fork of the project into your own repository . Make all your necessary changes and create a pull request with a description on what was added or removed and details explaining the changes in lines of code. If approved, project owners will merge it.

#### Licensing
MIT
