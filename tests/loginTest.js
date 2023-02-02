const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000');
        await driver.wait(until.elementLocated(By.xpath(`//*[@id="root"]/div/div[2]/div[1]/div/button[2]`)), 10000).click();
        await driver.wait(until.elementLocated(By.name('email')), 10000).sendKeys("adnancrnovrsanin48@gmail.com");
        await driver.wait(until.elementLocated(By.name('password')), 10000).sendKeys("Pa$$w0rd");
        await driver.wait(until.elementLocated(By.xpath(`//*[@id=":r1:"]`)), 10000).click();
    } catch (error) {
        console.log(error);
    }
}

loginTest();