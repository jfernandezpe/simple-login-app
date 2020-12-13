import { html, fixture, expect, nextFrame } from '@open-wc/testing';

import '../time-counter.js';
import TimeCounter from '../TimeCounter.js';

describe('LoginPageUI', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <time-counter></time-counter> `);
    await nextFrame;
  });

  it('should pass  the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  describe('calculating time', () => {
    it('should calculate the secons', () => {
      const cases = [
        { time: 1000, expected: 1 },
        { time: 5000, expected: 5 },
        { time: 37269, expected: 37 },
        { time: 1607862551, expected: 42 },
        { time: 1607828551, expected: 8 },
      ];
      cases.forEach(({ time, expected }) => {
        const result = TimeCounter.getSecondsFromMilliseconsDate(time);

        expect(result, `calculating seconds for ${time}`).to.be.equal(expected);
      });
    });
    it('should calculate the minutes', () => {
      const cases = [
        { time: 1000, expected: 0 },
        { time: 5000, expected: 0 },
        { time: 65269, expected: 1 },
        { time: 119951, expected: 1 },
        { time: 120000, expected: 2 },
      ];
      cases.forEach(({ time, expected }) => {
        const result = TimeCounter.getMinutesFromMilliseconsDate(time);

        expect(result, `calculating minutes for ${time}`).to.be.equal(expected);
      });
    });
    it('should calculate the hours', () => {
      const cases = [
        { time: 5000, expected: 0 },
        { time: 120000, expected: 0 },
        { time: 3600000, expected: 1 }, // 1 hour
        { time: 86400000, expected: 0 }, // 1 day
        { time: 108000000, expected: 6 }, // 1 day and 6 hours
      ];
      cases.forEach(({ time, expected }) => {
        const result = TimeCounter.getHoursFromMilliseconsDate(time);

        expect(result, `calculating hours for ${time}`).to.be.equal(expected);
      });
    });
    it('should calculate the days', () => {
      const cases = [
        { time: 5000, expected: 0 },
        { time: 120000, expected: 0 },
        { time: 3600000, expected: 0 }, // 1 hour
        { time: 86400000, expected: 1 }, // 1 day
        { time: 108000000, expected: 1 }, // 1 day and 6 hours
        { time: 31104000000, expected: 360 }, // 360 days
        { time: 86400000000, expected: 1000 }, // 1000 days
      ];
      cases.forEach(({ time, expected }) => {
        const result = TimeCounter.getDaysFromMilliseconsDate(time);

        expect(result, `calculating days for ${time}`).to.be.equal(expected);
      });
    });
  });
});
