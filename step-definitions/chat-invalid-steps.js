module.exports = function(){
    this.Given(/^user click chat feature again$/, function () {
        driver.then(function () {
            return driver.wait(until.elementsLocated(by.xpath('/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]')), 100000).then(function(){
                
                return driver.findElements(by.xpath('/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]'));
            })
            .then(function(){
                return page.clickChat.perform();
            })
        })        
    });

    this.When(/^user does not fill message$/, function () {
        driver.then(function () {
            return driver.wait(until.elementsLocated(by.xpath('//*[@id="jcont"]/jdiv[3]/jdiv/jdiv[3]/jdiv[1]/jdiv[1]/textarea')), 5000).then(function(){
                return driver.findElements(by.xpath('//*[@id="jcont"]/jdiv[3]/jdiv/jdiv[3]/jdiv[1]/jdiv[1]/textarea'))
            })
            .then(function(){
                return page.clickTextInvalid.perform();
            })
        })
    });

    this.Then(/^user just click send button$/, function () {
        driver.then(function () {
            return page.clickSend.perform();
        })
    });
}