import { PROJECTPage } from './app.po';

describe('project App', function() {
  let page: PROJECTPage;

  beforeEach(() => {
    page = new PROJECTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
