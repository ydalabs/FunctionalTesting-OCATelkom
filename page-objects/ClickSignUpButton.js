module.exports = {
    url: "http://ocatelkom.co.id/register",

    elements: {
        ClickSignUpButton: by.xpath("//body/div[@id='app']/div[3]/div[1]/form[1]/input[6]")
    },

    perform: function () {
        var selector = page.ClickSignUpButton.elements.ClickSignUpButton;
        return driver.findElement(selector).click(selector);
    }
};
