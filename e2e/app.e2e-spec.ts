import { NgQueryBuilderPage } from './app.po';

describe('ng-query-builder App', () => {
  let page: NgQueryBuilderPage;

  beforeEach(() => {
    page = new NgQueryBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
