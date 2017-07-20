import { browser, by, element } from 'protractor';

export class SpiceKitchenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
