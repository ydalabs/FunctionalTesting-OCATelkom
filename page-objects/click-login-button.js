module.exports = {

    url: 'https://ocaindonesia.co.id/login',

    elements: {
        clickLoginButton: by.xpath("//body/div[@id='app']/div[1]/div[1]/form[1]/input[3]")
    },

    perform: function () {

        var selector = page.clickLoginButton.elements.clickLoginButton;
        return driver.findElement(selector).click(selector);
    }
};