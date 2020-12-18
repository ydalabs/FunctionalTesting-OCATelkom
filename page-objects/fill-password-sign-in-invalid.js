module.exports = {

    url: 'https://ocaindonesia.co.id/login',

    elements: {
        fillPasswordSignInInvalid: by.xpath("//input[@id='password']")
    },

    performFill: function () {

        var selector = page.fillPasswordSignInInvalid.elements.fillPasswordSignInInvalid;
        return driver.findElement(selector).sendKeys(shared.id.invalidpassword);
    }
};