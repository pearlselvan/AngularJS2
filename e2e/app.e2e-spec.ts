import { NestedComponentPage } from './app.po';

describe('nested-component App', () => {
  let page: NestedComponentPage;

  beforeEach(() => {
    page = new NestedComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
