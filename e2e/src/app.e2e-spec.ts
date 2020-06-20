import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render landing page and compare greeting message', () => {
    page.navigateTo();
    expect(page.getHome()).toEqual('Hi there! Feel like watching a movie?');
  });

  it('should render movies page and count amount of movies', () => {
    page.navigateTo();
    const menu = page.getMoviesNavbar();
    menu.click();
    expect(page.getMovies()).toBeGreaterThan(16);
  });

  it('should add item to cart and proceed to cart', () => {
    page.navigateTo();
    const menu = page.getMoviesNavbar();
    menu.click();
    const add = page.getAddMovieButton();
    add.click();
    const cart = page.getAddToCart();
    cart.click();
    const checkout = page.getPressCheckOut();
    checkout.click();
    expect(page.getCheckoutForm()).toEqual('Name:');

    // FORTSÄTT MED ATT FYLLA I FORUMLÄR OCH
    // KLICKA PÅ PLACE ORDER SEN ADMIN
    // OCH SE ATT LISTAN DÄR INTE ÄR TOM.


  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
