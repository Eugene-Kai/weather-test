import React from 'react';
import styled from 'styled-components';

import { Day } from '../../interfaces';
import DayImage from '../DayImage';

const Wrapper = styled.div<{ selected: boolean }>`
  flex: 1;
  min-width: 288px;
  height: 100%;
  background-color: ${({ theme, selected }) => (selected ? theme.colors.dark : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 390px) {
    min-width: 195px;
  }
`;

const MainBlock = styled.div<{ selected: boolean; isLast: boolean }>`
  flex: 1;
  max-width: 288px;
  height: 150px;
  padding-left: 79px;
  padding-right: 28px;
  border-right: ${({ selected, isLast }) => (!isLast && !selected ? 1 : 0)}px solid #ecedf2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 390px) {
    min-width: 195px;
    height: 100px;
    padding-left: 32px;
    border-right: none;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const DayImageWrapper = styled.div`
  margin-bottom: 12px;
`;

const Temperature = styled.div<{ selected: boolean }>`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.45px;
  color: #${({ selected }) => (selected ? 'fff' : '000')};
  margin-bottom: 8px;
`;

const Description = styled.div<{ selected: boolean }>`
  font-weight: 500;
  font-size: 20px;
  line-height: 23.5px;
  color: #${({ selected }) => (selected ? 'fff' : '000')};
  margin-bottom: 12px;
`;

const DayBlock = styled.div<{ selected: boolean }>`
  font-size: 14px;
  line-height: 16.45px;
  color: #${({ selected }) => (selected ? 'fff' : '6f7a85')};
`;

const Arrow = styled.img<{ selected: boolean }>`
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-out;
  transform: rotate(${({ selected }) => (selected ? '-90' : '0')}deg);
`;

type Props = {
  selected: boolean;
  onSelect: () => void;
  isLast: boolean;
} & Omit<Day, 'id' | 'date' | 'times'>;

const WeatherDay: React.FC<Props> = ({ type, description, temperature, day, selected, onSelect, isLast }) => {
  return (
    <Wrapper selected={selected} onClick={onSelect}>
      <MainBlock selected={selected} isLast={isLast}>
        <Content>
          <DayImageWrapper>
            <DayImage type={type} view={selected ? 'light' : 'dark'} width={24} height={24} />
          </DayImageWrapper>
          <Temperature selected={selected}>{`${temperature.day}° / ${temperature.night}°`}</Temperature>
          <Description selected={selected}>{description}</Description>
          <DayBlock selected={selected}>{day}</DayBlock>
        </Content>
        <Arrow src={`images/arrow_forward${selected ? '_white' : ''}.png`} alt="Arrow right" selected={selected} />
      </MainBlock>
    </Wrapper>
  );
};

export default WeatherDay;
