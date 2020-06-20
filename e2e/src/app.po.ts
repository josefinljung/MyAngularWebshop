import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHome(): Promise<string> {
    return element(by.className('message-span')).getText() as Promise<string>;
  }

  getMoviesNavbar() {
    return element(by.id('movies-nav'));
  }

  getMovies(): Promise<number> {
    return element.all(by.className('movie-container')).count() as Promise<number>;
  }

  getAddMovieButton() {
    return element(by.className('add-btn'));
  }

  getAddToCart() {
    return element(by.id('cart-nav'));
  }

  getViewCart() {
    return element.all(by.className('cart-container'));
  }

  getPressCheckOut() {
    return element(by.className('checkout-btn'));
  }
  getCheckoutForm(){
    return element(by.className('name'));
  }










}
