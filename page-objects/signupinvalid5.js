module.exports = {
    url: "http://ocatelkom.co.id/register",

    elements: {
        fillFirstName: by.xpath("//input[@id='first_name']"),
        fillLastName: by.xpath("//input[@id='last_name']"),
        fillEmail: by.xpath("//input[@id='email']"),
        fillPhone: by.xpath("//input[@id='phone']"),
        fillPassword: by.xpath("//input[@id='password']")
    },

    performFillFN: function () {
        var selector = page.signupinvalid5.elements.fillFirstName;
        return driver.findElement(selector).sendKeys(shared.signupinvalid5.firstname);
    },

    performFillLN: function () {
        var selector = page.signupinvalid5.elements.fillLastName;
        return driver.findElement(selector).sendKeys(shared.signupinvalid5.lastname);
    },

    performFillE: function () {
        var selector = page.signupinvalid5.elements.fillEmail;
        return driver.findElement(selector).sendKeys(shared.signupinvalid5.email);
    },

    performFillPN: function () {
        var selector = page.signupinvalid5.elements.fillPhone;
        return driver.findElement(selector).sendKeys(shared.signupinvalid5.phonenumber);
    },

    performFillP: function () {
        var selector = page.signupinvalid5.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.signupinvalid5.password);
    }
}