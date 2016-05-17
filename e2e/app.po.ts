export class Logbook2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('logbook2-app h1')).getText();
  }
}
