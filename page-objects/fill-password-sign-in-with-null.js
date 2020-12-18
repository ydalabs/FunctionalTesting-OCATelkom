module.exports = {

    url: 'https://ocaindonesia.co.id/login',

    elements: {
        fillPasswordSignInWithNull: by.xpath("//input[@id='password']")
    },

    perform: function () {

        var selector = page.fillPasswordSignInWithNull.elements.fillPasswordSignInWithNull;
        return driver.findElement(selector).sendKeys("");
    }
};