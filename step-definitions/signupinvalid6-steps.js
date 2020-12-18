module.exports = function () {
    
    this.Given(/^User browse register page Failed Version 6$/, function () {
        helpers.loadPage(shared.signupobjects.signupURL);
    });

    this.Given(/^User fill first name to register Failed Version 6$/, function () {
        driver.then(function (){
            return page.signupinvalid6.performFillFN();
        })
    });

    this.Given(/^User fill last name to register Failed Version 6$/, function () {
        driver.then(function (){
            return page.signupinvalid6.performFillLN();
        })
    });

    this.Given(/^User fill active email to register Failed Version 6$/, function () {
        driver.then(function (){
            return page.signupinvalid6.performFillE();
        })
    });

    this.Given(/^User fill active phone number to register Failed Version 6$/, function () {
        driver.then(function (){
            return page.signupinvalid6.performFillPN();
        })
    });

    this.Given(/^User fill password to register Failed Version 6$/, function () {
        driver.then(function (){
            return page.signupinvalid6.performFillP();
        })
    });

    this.When(/^User click button create account Failed Version 6$/, function () {
        driver.then(function (){
            return page.ClickSignUpButton.perform();
        })
    });

    this.Then(/^User get alert 6$/, function () {
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
              return title === 'Registered - Telkom OCA';
            });
        }, 10000);
    })
}