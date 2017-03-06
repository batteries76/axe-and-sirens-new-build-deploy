import { AxeAndSirensPage } from './app.po';

describe('axe-and-sirens App', function() {
  let page: AxeAndSirensPage;

  beforeEach(() => {
    page = new AxeAndSirensPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
