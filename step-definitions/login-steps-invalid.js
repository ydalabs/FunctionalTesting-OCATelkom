module.exports = function () {
    this.Given(/^user browse login page case 2$/, function () {
        helpers.loadPage(shared.pages.vuturaSignInPage)
    });

    this.Given(/^user fill invalid email to login$/, function () {
        driver.then(function () {
            return page.fillEmailSignInInvalid.performFill();
        })
    });

    this.Given(/^user fill invalid password to login$/, function () {
        driver.then(function () {
            return page.fillPasswordSignInInvalid.performFill();
        })
    });

    this.Given(/^user click login button case 2$/, function () {
        driver.then(function () {
            return page.clickLoginButton.perform();
        })
    });

    this.When(/^user see invalid pop up notification$/, function () {
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
              return title === 'Login - Telkom OCA solusi omnichannel - Whatsapp bisnis broadcast, Email blast, ivr call dan sms blast';
            });
        },15000);
    });
}