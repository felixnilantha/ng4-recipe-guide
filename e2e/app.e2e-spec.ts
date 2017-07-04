import { Ng4RecipeGuidePage } from './app.po';

describe('ng4-recipe-guide App', () => {
  let page: Ng4RecipeGuidePage;

  beforeEach(() => {
    page = new Ng4RecipeGuidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
