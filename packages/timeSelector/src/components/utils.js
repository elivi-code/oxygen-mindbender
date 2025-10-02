import memoize from 'memoize-one';
import format from 'date-fns/format';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import setSeconds from 'date-fns/setSeconds';

export const TIME_PARSE_FORMATS = [
  'H',
  'Hmm',
  'H:mm',
  'H.mm.ss',
  'Hmmss',
  'H:mm:ss',
  'ha',
  'hamm',
  'hmma',
  'h:mma',
  'h:mm a',
  'h.mma',
  'h.mm a',
  'h.mm.ssa',
  'h.mm.ss a',
  'h:mm:ss a',
  'h:mm:ss a',
  'hmmssa',
];

export const getTimeListItems = memoize(timeDisplayFormat => {
  const listItems = [];
  const minutes = [0, 15, 30, 45];

  for (let h = 0; h < 24; h += 1) {
    for (const m of minutes) {
      const listItem = {
        time: { hours: h, minutes: m, seconds: 0 },
        formatted: format(
          setHours(setMinutes(setSeconds(new Date(), 0 || 0), m), h),
          timeDisplayFormat,
        ),
      };

      listItems.push(listItem);
    }
  }

  return listItems;
});
