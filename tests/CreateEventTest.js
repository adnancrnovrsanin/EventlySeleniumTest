const { Builder, By, Key, until } = require('selenium-webdriver');

async function CreateEventTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("http://localhost:3000");
        if (await driver.wait(until.elementLocated(By.xpath(`//*[@id="root"]/div/div[2]/div[1]/div/button[2]`))).isDisplayed())
            loginTest(driver);
        await driver.wait(until.elementLocated(By.xpath(`//*[@id="root"]/div/div[2]/div[1]/div/a[2]`)), 10000).click();
        await driver.wait(until.elementLocated(By.xpath(`//*[@id="standard-error-helper-text"]`)), 10000).sendKeys("Selenium Test Event");
        await driver.wait(until.elementLocated(By.xpath(`//*[@id="demo-simple-select-helper"]`)), 10000).click();
        await driver.wait(until.elementLocated(By.xpath(`//*[@id="menu-"]/div[3]/ul/li[4]`)), 10000).click();

        await driver.wait(until.elementLocated(By.xpath(`//*[@id="root"]/div/div[3]/div/form/div[1]/div[3]/div/div`)), 10000).click();
        await driver.wait(until.elementLocated(By.xpath(`//*[@id="country-select-demo"]`)), 10000).sendKeys("Serbia");
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys("Novi Pazar").perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys("Test Centar").perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys("Ovo je proba").perform();

        // Biranje datuma
        await driver.wait(until.elementLocated(By.className("MuiPickersDay-today")), 10000).click();

        await driver.wait(until.elementLocated(By.xpath(`//*[@id=":r9:"]`)), 10000).click();

    } catch (error) {
        console.log(error);
    }
}

CreateEventTest();

async function loginTest(driver) {
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