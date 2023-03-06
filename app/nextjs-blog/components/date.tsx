import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string }) {
  // See https://date-fns.org/v2.16.1/docs/format for date formatting possibilities
  const date = parseISO(dateString)

  // "Sunday, March 5th, 2023"
  return <time dateTime={dateString}>{format(date, 'PPPP')}</time>
}