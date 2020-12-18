module.exports = {

    url: 'https://ocaindonesia.co.id/login',

    elements: {
        fillEmailSignInWithNull: by.xpath("//body/div[@id='app']/div[1]/div[1]/form[1]/input[1]")
    },

    perform: function () {

        var selector = page.fillEmailSignInWithNull.elements.fillEmailSignInWithNull;
        return driver.findElement(selector).sendKeys("");
    }
};