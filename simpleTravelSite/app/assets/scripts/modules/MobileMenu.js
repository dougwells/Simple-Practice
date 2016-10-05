import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }

  events() {
    /* anything included within the .bind() will be used as the this keyword when the toggleTheMenu() method runs. */
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }
  /* we don't want the this keyword to equal the element that triggers the event.  We want it to point back to our object so we can use it to access the menuContent property. How can we do that? How can we override JS's default behavior, and how can we have fine grain control over the this keyword? We can use a JS feature named .bind(). */
  toggleTheMenu() {
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menuIcon.toggleClass('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;
