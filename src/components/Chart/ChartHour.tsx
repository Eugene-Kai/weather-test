import React, { useMemo } from 'react';
import styled from 'styled-components';

import { DayType } from '../../interfaces';
import DayImage from '../DayImage';

const LINE_HEIGHT = 225;

const Wrapper = styled.div<{ isLast: boolean }>`
  margin-right: ${({ isLast }) => (isLast ? 0 : 70)}px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TypeWrapper = styled.div<{ value: number }>`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ value }) => value}px;
  z-index: 2;
`;

const Line = styled.div`
  width: 2px;
  height: ${LINE_HEIGHT}px;
  background-color: #1c2854;
  margin-bottom: 24px;
`;

const Pointer = styled.div<{ value: number }>`
  width: 14px;
  height: 14px;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 3px solid #1c2854;
  position: absolute;
  top: ${({ value }) => value + 22 + 14}px;
  z-index: 2;
`;

const TemperatureBlock = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 23.5px;
  color: #fff;
  margin-bottom: 7px;
  text-align: center;
`;

const TimeBlock = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #b0bcc8;
  text-align: center;
`;

type Props = {
  type: DayType;
  degreeToday: number;
  degreeNext: number | undefined;
  degreeMin: number;
  degreeMax: number;
  time: string;
  isLast: boolean;
};

const ChartHour: React.FC<Props> = ({ type, degreeToday, degreeMin, degreeMax, time, isLast }) => {
  const value = useMemo(() => {
    const availableLineHeight = LINE_HEIGHT - 56;

    const diff = ((degreeMax - degreeToday) * 100) / (degreeMax - degreeMin);

    return Math.floor(availableLineHeight * (diff / 100));
  }, [degreeMax, degreeMin, degreeToday]);

  return (
    <Wrapper isLast={isLast}>
      <TypeWrapper value={value}>
        <DayImage type={type} width={20} height={20} view="light" />
      </TypeWrapper>
      <Line />
      <Pointer value={value} />

      <TemperatureBlock>{degreeToday}°</TemperatureBlock>
      <TimeBlock>{time}</TimeBlock>
    </Wrapper>
  );
};

export default React.memo(ChartHour);
