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
        var selector = page.signupinvalid1.elements.fillFirstName;
        return driver.findElement(selector).sendKeys(shared.signupinvalid1.firstname);
    },

    performFillLN: function () {
        var selector = page.signupinvalid1.elements.fillLastName;
        return driver.findElement(selector).sendKeys(shared.signupinvalid1.lastname);
    },

    performFillE: function () {
        var selector = page.signupinvalid1.elements.fillEmail;
        return driver.findElement(selector).sendKeys(shared.signupinvalid1.email);
    },

    performFillPN: function () {
        var selector = page.signupinvalid1.elements.fillPhone;
        return driver.findElement(selector).sendKeys(shared.signupinvalid1.phonenumber);
    },

    performFillP: function () {
        var selector = page.signupinvalid1.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.signupinvalid1.password);
    }
}