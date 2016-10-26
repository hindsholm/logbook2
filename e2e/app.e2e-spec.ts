import { LogbookPage } from './app.po';

describe('logbook App', function() {
  let page: LogbookPage;

  beforeEach(() => {
    page = new LogbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
