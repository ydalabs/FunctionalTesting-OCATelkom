module.exports = {

    url: 'https://ocatelkom.co.id/',

    elements: {
        clickChat: by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]")
    },
    
    perform: function () {
        var selector = page.clickChat.elements.clickChat;
        return driver.findElement(selector).click(selector);
    }

    // /html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]
};
