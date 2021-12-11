import React, { useMemo } from 'react';
import styled from 'styled-components';

import days from '../../data/days';
import { DayType } from '../../interfaces';
import ChartHour from './ChartHour';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Chart: React.FC = () => {
  const today = days[0];

  const times = useMemo(() => {
    return (
      [] as {
        type: DayType;
        time: string;
        value: number;
      }[]
    ).concat(today.times.am, today.times.pm);
  }, [today.times.am, today.times.pm]);

  const degreeMin = useMemo(() => {
    return times.reduce((acc, time, i) => (i === 0 ? time.value : acc < time.value ? acc : time.value), 0);
  }, [times]);

  const degreeMax = useMemo(() => {
    return times.reduce((acc, time, i) => (i === 0 ? time.value : acc > time.value ? acc : time.value), 0);
  }, [times]);

  return (
    <Wrapper>
      {times.map((t, i) => {
        const nextHour = times[i + 1];

        const degreeNext = nextHour ? nextHour.value : undefined;

        return (
          <ChartHour
            key={t.time}
            type={t.type}
            degreeToday={t.value}
            degreeNext={degreeNext}
            degreeMin={degreeMin}
            degreeMax={degreeMax}
            time={t.time}
            isLast={i === times.length - 1}
          />
        );
      })}
    </Wrapper>
  );
};

export default Chart;
