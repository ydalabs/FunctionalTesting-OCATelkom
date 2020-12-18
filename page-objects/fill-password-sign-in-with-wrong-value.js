module.exports = {

    url: 'https://ocaindonesia.co.id/login',

    elements: {
        fillPasswordWithInvalidValue: by.xpath("//input[@id='password']")
    },

    perform: function () {

        var selector = page.fillPasswordWithInvalidValue.elements.fillPasswordWithInvalidValue;
        return driver.findElement(selector).sendKeys("==1");
    }
};