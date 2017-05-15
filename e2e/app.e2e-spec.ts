import { ABMSlim3Page } from './app.po';

describe('abmslim3 App', () => {
  let page: ABMSlim3Page;

  beforeEach(() => {
    page = new ABMSlim3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
