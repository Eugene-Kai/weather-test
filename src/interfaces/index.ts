import React from 'react';

export enum DayType {
  rainy = 'rainy',
  sunny = 'sunny',
  cloudy = 'cloudy',
}

export type Times = {
  am: {
    type: DayType;
    time: string;
    value: number;
  }[];
  pm: {
    type: DayType;
    time: string;
    value: number;
  }[];
};

export interface Day {
  id: string;
  type: DayType;
  description: string;
  temperature: {
    day: number;
    night: number;
  };
  day: string;
  date: string;
  times: Times;
}

export interface SvgProps {
  width: number;
  height: number;
  viewBox?: string;
  color?: string;
  style?: React.CSSProperties;
}
