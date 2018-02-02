import { AppPage } from './app.po';

describe('tox-ng5-lctrn App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
