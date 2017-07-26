import { CcnewPage } from './app.po';

describe('ccnew App', () => {
  let page: CcnewPage;

  beforeEach(() => {
    page = new CcnewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
