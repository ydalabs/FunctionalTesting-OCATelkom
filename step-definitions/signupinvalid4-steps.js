module.exports = function () {
    
    this.Given(/^User browse register page Failed Version 4$/, function () {
        helpers.loadPage(shared.signupobjects.signupURL);
    });

    this.Given(/^User fill first name to register Failed Version 4$/, function () {
        driver.then(function (){
            return page.signupinvalid4.performFillFN();
        })
    });

    this.Given(/^User fill last name to register Failed Version 4$/, function () {
        driver.then(function (){
            return page.signupinvalid4.performFillLN();
        })
    });

    this.Given(/^User fill active email to register Failed Version 4$/, function () {
        driver.then(function (){
            return page.signupinvalid4.performFillE();
        })
    });

    this.Given(/^User fill active phone number to register Failed Version 4$/, function () {
        driver.then(function (){
            return page.signupinvalid4.performFillPN();
        })
    });

    this.Given(/^User fill password to register Failed Version 4$/, function () {
        driver.then(function (){
            return page.signupinvalid4.performFillP();
        })
    });

    this.When(/^User click button create account Failed Version 4$/, function () {
        driver.then(function (){
            return page.ClickSignUpButton.perform();
        })
    });

    this.Then(/^User get alert 4$/, function () {
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
              return title === 'Registered - Telkom OCA';
            });
        }, 10000);
    })
}