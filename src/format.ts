import {
  MILLISECOND_BREAKPOINTS,
  ONE_DAY,
  ONE_HOUR,
  THIRTY_SECONDS,
} from "./constants";
import {
  calculateDifference,
  parseLocale,
  parseDate,
} from "./core";
import locales from "./locale";

/**
 * @name format
 * @function format
 * @description Formats a `Date / string / timestamp` to time ago.
 * @param date - The date to be formatted. Can be a `Date`, `string`, or `timestamp`.
 * @param [locale] - The locale to be used. Defaults to `en_US`.
 * @param [relativeDate] - The date to compare the `date` to. Defaults to `Date.now()`.
 * @param [lateDeadline] - The deadline after which the `date` will be shown as a normal Date and formatted with the `pastPrefix`.
 * @param [latePrefix] - The prefix to be used if the `date` is past the `lateDeadline`.
 * @param [normalPrefix] - The prefix to be used if the `date` is not past the `lateDeadline`.
 * @param [isSeconds=false] - If `true`, the function will parse the `date` as seconds instead of milliseconds.
 * @param [closeDates=false] - If `true`, the function will return `Today at ${time}` or `Yesterday at ${time}` if at least 6 hours have passed since the `date`.
 * @example
 * ```
 * import { format } from '@fetched/timeago'
 * 
 * format('2016-06-12')
 * => years ago
 * 
 * format('2016-06-12', { locale: 'zh_CN' })
 * => 7年前
 * ```
 * @returns {string}
 */
// isRealtime: boolean = false
export function format(
  date: Date | string | number,
  {
    locale,
    relativeDate,
    lateDeadline,
    latePrefix,
    normalPrefix,
    isSeconds = false,
    closeDates = false,
  }: {
    locale?: string;
    relativeDate?: Date | string | number;
    lateDeadline?: Date | string | number;
    latePrefix?: string;
    normalPrefix?: string;
    isSeconds?: boolean;
    closeDates?: boolean;
  } = {}
): string {
  const inputDate = parseDate(
    isSeconds && typeof date == "number" ? date * 1000 : date
  );
  const inputeRelative = parseDate(
    (isSeconds && typeof relativeDate == "number"
      ? relativeDate * 1000
      : relativeDate) || new Date()
  );

  const inMilliseconds = calculateDifference(inputDate, inputeRelative);

  const parsedLocale = parseLocale(locale);

  const localeModule = locales.find((item) => item.locale === parsedLocale)!;

  const timeDirection = inMilliseconds < 0 ? 1 : 0;

  if (closeDates) {
    if (inMilliseconds < 0) {
      if (inMilliseconds >= -ONE_DAY && inMilliseconds <= -ONE_HOUR * 6) {
        return localeModule.formatShort(inputDate, 1);
      }
      if (inMilliseconds >= -ONE_DAY * 2 && inMilliseconds <= -ONE_DAY) {
        return localeModule.formatShort(inputDate, 0);
      }
    }
    if (inMilliseconds > 0) {
      if (inMilliseconds <= ONE_DAY && inMilliseconds >= ONE_HOUR * 6) {
        return localeModule.formatShort(inputDate, 1);
      }
      if (inMilliseconds <= ONE_DAY * 2 && inMilliseconds >= ONE_DAY) {
        return localeModule.formatShort(inputDate, 2);
      }
    }
  }

  if (lateDeadline) {
    if (timeDirection && parseDate(lateDeadline) > inputDate) {
      return `${latePrefix || ""}${inputDate.toLocaleString(parsedLocale)}`;
    }
    if (!timeDirection && parseDate(lateDeadline) > inputDate) {
      return `${latePrefix || ""}${inputDate.toLocaleString(parsedLocale)}`;
    }
  }

  const absoluteDifference = Math.abs(inMilliseconds);

  let formatterResult;

  if (absoluteDifference < THIRTY_SECONDS) {
    formatterResult = localeModule.now;
  } else {
    const timeUnitIndex =
      MILLISECOND_BREAKPOINTS.findIndex((unit) => absoluteDifference < unit) -
      1;
    formatterResult = localeModule.format(absoluteDifference, timeUnitIndex);
  }

  const result = formatterResult[timeDirection];

  return `${normalPrefix || ""}${result}`;
}
