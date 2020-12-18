module.exports = function (){
    this.Given(/^user browse dashboard page$/, function () {
        helpers.loadPage(shared.pages.ocaDashboard)
    });

    this.Given(/^user click chat feature$/, function () {
        driver.then(function () {
            return driver.wait(until.elementsLocated(by.xpath('/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]')), 100000).then(function(){
                
                return driver.findElements(by.xpath('/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]'));
            })
            .then(function(){
                return page.clickChat.perform();
            })
        })        
    });

    this.When(/^user fill message$/, function () {
        driver.then(function () {
            return driver.wait(until.elementsLocated(by.xpath('//*[@id="jcont"]/jdiv[3]/jdiv/jdiv[3]/jdiv[1]/jdiv[1]/textarea')), 5000).then(function(){
                return driver.findElements(by.xpath('//*[@id="jcont"]/jdiv[3]/jdiv/jdiv[3]/jdiv[1]/jdiv[1]/textarea'))
            })
            .then(function(){
                return page.clickText.perform();
            })
        })
    });

    this.Then(/^user click send button$/, function () {
        driver.then(function () {
            return page.clickSend.perform();
        })
    });
    
    // this.When(/^user fill name field$/, function () {
    //     driver.then(function () {
    //         return driver.wait(until.elementsLocated(by.xpath('/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[3]/jdiv[3]/jdiv[1]/jdiv[2]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[5]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/input[1]')), 1000).then(function(){
    //             return driver.findElements(by.xpath('/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[3]/jdiv[3]/jdiv[1]/jdiv[2]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[5]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/input[1]'))
    //         })
    //         .then(function(){
    //             return page.fillName.perform();
    //         })
    //     })
    // }); 

    // this.Then(/^user click kirim button$/, function () {
    //     // driver.then(function () {
    //     //     return page.clickSend.perform();
    //     // })
    // }); 
}