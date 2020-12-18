module.exports = {

    url: 'https://ocaindonesia.co.id/login',

    elements: {
        fillPasswordSignIn: by.xpath("//input[@id='password']")
    },

    perform: function () {

        var selector = page.fillPasswordSignIn.elements.fillPasswordSignIn;
        return driver.findElement(selector).sendKeys(shared.id.password);
    }
};