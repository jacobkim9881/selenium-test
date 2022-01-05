const {Builder, By, Key, until} = require('selenium-webdriver');
// should be 'selenium-webdriver/chrome' if .forBrowser('chrome')
// should be 'selenium-webdriver/firefox' if .forBrowser('firefox')
const { Options } = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
    /* This option set profiles for chrome browser by selenium
      So you don't have to login on new chrome browser
      */
    let options = new Options();
    //.setChromeBinaryPath(path.normalize(process.env.HOME + 'bin/'));
    //'/Users/kytco/AppData/Local/Goole/Chrome/User\sData/Default/'
    let profilePath = 'user-data-dir=' + path.normalize(process.env.HOME + '/AppData/Local/Google/Chrome/User Data');
    //['user-data-dir=' + path.normalize(process.env.HOME + '/AppData/Local/Google/Chrome/User Data'), '--disable-web-security', '--allow-running-insecure-content'];    
    
    options.addArguments(profilePath);
    //options.addArguments("profile-directory=Profile 1");
    //options.headless();
    //options.addArguments('start-fullscreen');
    console.log(options)
    let theUrl = 'https://chrome.google.com/webstore/devconsole/d81fd2cb-70eb-4292-af29-3a795a3b3ef0?hl=ko'
    //'https://chrome.google.com/webstore/devconsole/d81fd2cb-70eb-4292-af29-3a795a3b3ef0/bgmbliffojkhembdalfdgldpeihhpdnm/edit'
  let driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();
  try {    
    /*
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google 검색'), 1000);
    
    */
    
    await driver.get(theUrl);
    
  } finally {
    //await driver.quit();
  }
})();