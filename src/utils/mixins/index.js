import { dedupeMixin } from '@open-wc/dedupe-mixin';

export const EventsMixin = dedupeMixin(
  superclass =>
    // eslint-disable-next-line no-shadow
    class EventsMixin extends superclass {
      triggerEvent(eventName, detail) {
        this.dispatchEvent(
          new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true,
          })
        );
      }
    }
);
