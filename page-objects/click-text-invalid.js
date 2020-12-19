module.exports = {

    url: 'https://ocatelkom.co.id/',

    elements: {
        clickTextInvalid: by.xpath('//*[@id="jcont"]/jdiv[3]/jdiv/jdiv[3]/jdiv[1]/jdiv[1]/textarea')
    },
    
    perform: function () {
        var selector = page.clickTextInvalid.elements.clickTextInvalid;
        return driver.findElement(selector).sendKeys(shared.id.chatInvalid);
    }

    // /html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]
};
