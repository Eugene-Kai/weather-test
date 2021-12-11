import { DayType } from '../interfaces';

const TEMPERATURE_MIN = 18;
const TEMPERATURE_MAX = 35;

const getRandomType = () => [DayType.sunny, DayType.rainy, DayType.cloudy][Math.floor(Math.random() * 3)];
const getRandomTemperature = () =>
  Math.floor(Math.random() * (TEMPERATURE_MAX - TEMPERATURE_MIN + 1)) + TEMPERATURE_MIN;

export default [
  {
    id: '1',
    type: DayType.sunny,
    temperature: {
      day: 30,
      night: 28,
    },
    description: 'Clear',
    day: 'Today',
    date: 'Wednesday 24 Nov, 2021',
    times: {
      am: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i}AM`, value: getRandomTemperature() };
      }),
      pm: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i === 0 ? '12' : i}PM`, value: getRandomTemperature() };
      }),
    },
  },
  {
    id: '2',
    type: DayType.rainy,
    temperature: {
      day: 28,
      night: 19,
    },
    description: 'Rain',
    day: 'Tomorrow',
    date: 'Thursday 25 Nov, 2021',
    times: {
      am: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i}AM`, value: getRandomTemperature() };
      }),
      pm: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i === 0 ? '12' : i}PM`, value: getRandomTemperature() };
      }),
    },
  },
  {
    id: '3',
    type: DayType.sunny,
    temperature: {
      day: 34,
      night: 30,
    },
    description: 'Clear',
    day: 'Friday',
    date: 'Friday 26 Nov, 2021',
    times: {
      am: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i}AM`, value: getRandomTemperature() };
      }),
      pm: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i === 0 ? '12' : i}PM`, value: getRandomTemperature() };
      }),
    },
  },
  {
    id: '4',
    type: DayType.cloudy,
    temperature: {
      day: 34,
      night: 23,
    },
    description: 'Partly Cloudy',
    day: 'Saturday',
    date: 'Saturday 27 Nov, 2021',
    times: {
      am: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i}AM`, value: getRandomTemperature() };
      }),
      pm: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i === 0 ? '12' : i}PM`, value: getRandomTemperature() };
      }),
    },
  },
  {
    id: '5',
    type: DayType.sunny,
    temperature: {
      day: 30,
      night: 28,
    },
    description: 'Clear',
    day: 'Sunday',
    date: 'Sunday 28 Nov, 2021',
    times: {
      am: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i}AM`, value: getRandomTemperature() };
      }),
      pm: new Array(12).fill(0).map((_, i) => {
        return { type: getRandomType(), time: `${i === 0 ? '12' : i}PM`, value: getRandomTemperature() };
      }),
    },
  },
];
