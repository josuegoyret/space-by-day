type WeekDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

type MonthIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type MonthLabel =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

interface APODObject {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: 'image' | 'video';
  thumbnail_url?: string;
  service_version: string;
  title: string;
  url: string;
}

interface DayObject {
  day: number;
  month: number;
  year: number;
  apod: APODObject | null;
}
