module.exports = function () {
    
    this.Given(/^User browse register page Failed Version 5$/, function () {
        helpers.loadPage(shared.signupobjects.signupURL);
    });

    this.Given(/^User fill first name to register Failed Version 5$/, function () {
        driver.then(function (){
            return page.signupinvalid5.performFillFN();
        })
    });

    this.Given(/^User fill last name to register Failed Version 5$/, function () {
        driver.then(function (){
            return page.signupinvalid5.performFillLN();
        })
    });

    this.Given(/^User fill active email to register Failed Version 5$/, function () {
        driver.then(function (){
            return page.signupinvalid5.performFillE();
        })
    });

    this.Given(/^User fill active phone number to register Failed Version 5$/, function () {
        driver.then(function (){
            return page.signupinvalid5.performFillPN();
        })
    });

    this.Given(/^User fill password to register Failed Version 5$/, function () {
        driver.then(function (){
            return page.signupinvalid5.performFillP();
        })
    });

    this.When(/^User click button create account Failed Version 5$/, function () {
        driver.then(function (){
            return page.ClickSignUpButton.perform();
        })
    });

    this.Then(/^User get alert 5$/, function () {
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
              return title === 'Registered - Telkom OCA';
            });
        }, 10000);
    })
}