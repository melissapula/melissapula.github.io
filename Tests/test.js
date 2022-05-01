module.exports = {
    "Navigate to mmpula24.github.io and verify URL and text" : function(browser) {
        browser
            .url("https://mmpula24.github.io/#/")
            .waitForElementPresent('body', 1000)
            .assert.urlContains("mmpula24")
            .assert.textContains('body',"Mother")
    },
}


