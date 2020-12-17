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
        var selector = page.fill.elements.fillFirstName;
        return driver.findElement(selector).sendKeys(shared.signupobjects.firstname);
    },

    performFillLN: function () {
        var selector = page.fill.elements.fillLastName;
        return driver.findElement(selector).sendKeys(shared.signupobjects.lastname);
    },

    performFillE: function () {
        var selector = page.fill.elements.fillEmail;
        return driver.findElement(selector).sendKeys(shared.signupobjects.email);
    },

    performFillPN: function () {
        var selector = page.fill.elements.fillPhone;
        return driver.findElement(selector).sendKeys(shared.signupobjects.phonenumber);
    },

    performFillP: function () {
        var selector = page.fill.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.signupobjects.password);
    }
}