import  	{ expect } 	from 'chai';
import  	 wat  			from 'web-accessibility-test';

// baseUrl is updated in the
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
