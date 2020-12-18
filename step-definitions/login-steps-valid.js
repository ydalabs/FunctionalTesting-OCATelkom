module.exports = function () {
    this.Given(/^user browse login page case 1$/, function () {
        helpers.loadPage(shared.pages.vuturaSignInPage)
    });

    this.Given(/^user fill email to login$/, function () {
        driver.then(function () {
            return page.fillEmailSignIn.perform()
        })
    });

    this.Given(/^user fill password to login$/, function () {
        driver.then(function () {
            return page.fillPasswordSignIn.perform()
        })
    });

    this.When(/^user click login button case 1$/, function () {
        driver.then(function () {
            return page.clickLoginButton.perform()
        })
    });

    this.Then(/^user redirect to dashboard page$/, function () {
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
              return title === 'Dashboard Trial - Telkom OCA solusi omnichannel - Whatsapp bisnis broadcast, Email blast, ivr call dan sms blast';
            });
        },15000);
    });

    /*this.Then(/^user click add button$/, function () {
        //driver.then(function () {
            //return page.clickADDButton._perform()
        //})
    });*/
}