module.exports = function () {
    
    this.Given(/^User browse register page$/, function () {
        helpers.loadPage(shared.signupobjects.signupURL);
    });

    this.Given(/^User fill first name to register$/, function () {
        driver.then(function (){
            return page.fill.performFillFN();
        })
    });

    this.Given(/^User fill last name to register$/, function () {
        driver.then(function (){
            return page.fill.performFillLN();
        })
    });

    this.Given(/^User fill active email to register$/, function () {
        driver.then(function (){
            return page.fill.performFillE();
        })
    });

    this.Given(/^User fill active phone number to register$/, function () {
        driver.then(function (){
            return page.fill.performFillPN();
        })
    });

    this.Given(/^User fill password to register$/, function () {
        driver.then(function (){
            return page.fill.performFillP();
        })
    });

    this.When(/^User click button create account$/, function () {
        driver.then(function (){
            return page.ClickSignUpButton.perform();
        })
    });

    this.Then(/^User go to email verification page$/, function () {
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
              return title === 'Registered - Telkom OCA';
            });
        }, 10000);
    })

//    this.Then(/^User click button create account$/, function () {
//        driver.wait(function () {
//            return driver.then(function (){
//                return page.ClickSignUpButton.perform();
//            })
//        }, 10000)
//    })
}