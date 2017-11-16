var webdriver = require('selenium-webdriver');
var homepage = {
    pageHeading: element(webdriver.By.id('welcome-message')),
    get: function() {
        browser.get('index.html');
    }
};

describe('main controller', function () {
    it('should display a welcome message', function() {
        homepage.get();
        expect(homepage.pageHeading.getText()).toEqual('welcome to the pizza store!');
    });
});