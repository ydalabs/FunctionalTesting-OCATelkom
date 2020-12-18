module.exports = {

    url: 'https://ocaindonesia.co.id/login',

    elements: {
        fillEmailSignInInvalid: by.xpath("//body/div[@id='app']/div[1]/div[1]/form[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fillEmailSignInInvalid.elements.fillEmailSignInInvalid;
        return driver.findElement(selector).sendKeys(shared.id.invalidemail);
    }
};