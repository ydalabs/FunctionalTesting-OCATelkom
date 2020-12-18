module.exports = function () {
    this.Given(/^user browse login page case 3$/, function () {
        helpers.loadPage(shared.pages.vuturaSignInPage)
    });

    this.Given(/^user fill null to email to login$/, function () {
        driver.then(function () {
            return page.fillEmailSignInWithNull.perform();
        })
    });

    this.Given(/^user fill null to password to login$/, function () {
        driver.then(function () {
            return page.fillPasswordSignInWithNull.perform();
        })
    });

    this.Given(/^user click login button case 3$/, function () {
        driver.then(function () {
            return page.clickLoginButton.perform();
        })
    });

    this.When(/^user see invalid input validation null user and password input form$/, function () {
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
              return title === 'Login - Telkom OCA solusi omnichannel - Whatsapp bisnis broadcast, Email blast, ivr call dan sms blast';
            });
        },15000);
    });
}