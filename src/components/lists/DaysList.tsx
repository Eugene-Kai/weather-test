import { useRouter } from 'next/router';
import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';

import DayContext from '../../contexts/DayContext';
import days from '../../data/days';
import WeatherDay from '../WeatherDay';

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 390px) {
    height: 194px;
  }
`;

const DaysList: React.FC = () => {
  const router = useRouter();
  const { selectedDay, setSelectedDay } = useContext(DayContext);

  const selectDay = useCallback(
    (day) => {
      return () => {
        void router.push('/details');

        setSelectedDay(day);
      };
    },
    [router, setSelectedDay],
  );

  return (
    <Wrapper>
      {days.map((d, i) => {
        const isLast = i === days.length - 1;

        return (
          <WeatherDay
            key={d.day}
            type={d.type}
            description={d.description}
            temperature={d.temperature}
            day={d.day}
            selected={selectedDay?.id === d.id}
            onSelect={selectDay(d)}
            isLast={isLast}
          />
        );
      })}
    </Wrapper>
  );
};

export default DaysList;
