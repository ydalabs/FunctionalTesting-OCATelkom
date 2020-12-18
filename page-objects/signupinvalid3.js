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
        var selector = page.signupinvalid3.elements.fillFirstName;
        return driver.findElement(selector).sendKeys(shared.signupinvalid3.firstname);
    },

    performFillLN: function () {
        var selector = page.signupinvalid3.elements.fillLastName;
        return driver.findElement(selector).sendKeys(shared.signupinvalid3.lastname);
    },

    performFillE: function () {
        var selector = page.signupinvalid3.elements.fillEmail;
        return driver.findElement(selector).sendKeys(shared.signupinvalid3.email);
    },

    performFillPN: function () {
        var selector = page.signupinvalid3.elements.fillPhone;
        return driver.findElement(selector).sendKeys(shared.signupinvalid3.phonenumber);
    },

    performFillP: function () {
        var selector = page.signupinvalid3.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.signupinvalid3.password);
    }
}