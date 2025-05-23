export type RepeatType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface RepeatInfo {
  type: RepeatType;
  interval: number;
  endDate?: string;
  count?: number;
  excludeDates?: string[];
  daysOfWeek?: string[];
}

export interface EventForm {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  location: string;
  category: string;
  repeat?: RepeatInfo | undefined;
  notificationTime: number; // 분 단위로 저장
}

export interface Event extends EventForm {
  id: string | undefined;
}
