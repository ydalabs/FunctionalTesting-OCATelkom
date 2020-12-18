module.exports = {

    url: 'https://ocaindonesia.co.id/',

    elements: {
        clickSend: by.xpath("//jdiv[@class='sendButton_797e']")
    },

    perform: function () {
        
        var selector = page.clickSend.elements.clickSend;
        return driver.findElement(selector).click(selector);
    }
};