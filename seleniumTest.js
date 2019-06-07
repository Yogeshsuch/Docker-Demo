const webDriver = require('selenium-webdriver')
const chromeDriver = require('chromedriver')

async function formTest(){
    const driver = new webDriver.Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:8080');
    await driver.findElement(webDriver.By.name('rollNo')).sendKeys(390);
    await driver.findElement(webDriver.By.name('name')).sendKeys('Yain');
    await driver.findElement(webDriver.By.name('marks')).sendKeys(85);
    await driver.findElement(webDriver.By.xpath('/html/body/app-root/div/app-student/div/div[2]/div[2]/input')).click();

    await driver.sleep(5000);
    driver.close();
}

formTest();