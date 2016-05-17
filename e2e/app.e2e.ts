import { Logbook2Page } from './app.po';

describe('logbook2 App', function() {
  let page: Logbook2Page;

  beforeEach(() => {
    page = new Logbook2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('logbook2 works!');
  });
});
