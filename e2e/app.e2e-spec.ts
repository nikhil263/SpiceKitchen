import { SpiceKitchenPage } from './app.po';

describe('spice-kitchen App', () => {
  let page: SpiceKitchenPage;

  beforeEach(() => {
    page = new SpiceKitchenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
