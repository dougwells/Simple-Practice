import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      /* waypoint method. This method forces recalculation of trigger point for every waypoint. */
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    /* we want this waypoint to be created as soon as the page loads. so we call and run this method in the class Stickyheader constructor(). */
    new Waypoint({
      /* [0] because waypoint is expecting a JS native DOM element. Without it, we would be passing it a jQuery object. [0] works because the first item in a jQuery like object is always a pointer to the native DOM element. */
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        /* we want to set the element property to the page section div that we have currently looped to. Within the each(), jQuery sets the JS this keyword to point towards the DOM element from our collection that has currently been looped to. */
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "18%"
      });

      new Waypoint({
        /* we want to set the element property to the page section div that we have currently looped to. Within the each(), jQuery sets the JS this keyword to point towards the DOM element from our collection that has currently been looped to. */
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
