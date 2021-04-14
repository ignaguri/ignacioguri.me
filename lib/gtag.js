export const GA_TRACKING_ID = 'UA-101143084-2';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (window && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (window && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
