import React from 'react';
import styled from 'styled-components';

import days from '../../data/days';
import Chart from '../Chart';

const Wrapper = styled.div`
  flex: 4;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;

  @media (max-width: 390px) {
    width: 100%;
  }
`;

const TopBlock = styled.div`
  width: 100%;
  padding: 55px 76px 0 83px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 390px) {
    padding: 48px 0 0 0;
    margin-bottom: 48px;
    flex-direction: column-reverse;
  }
`;

const TopLeft = styled.div`
  padding-top: 25px;

  @media (max-width: 390px) {
    padding-top: 0;
  }
`;

const LeftText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.15px;
  color: #b0bcc8;
`;

const InfoTime = styled.div`
  font-weight: 300;
  font-size: 32px;
  line-height: 37.6px;
  color: #fff;
  margin-bottom: 12px;
  text-align: right;

  @media (max-width: 390px) {
    font-size: 24px;
    line-height: 28.2px;
    text-align: center;
  }
`;

const InfoDate = styled.div`
  font-size: 18px;
  line-height: 21.15px;
  color: #b0bcc8;
  text-align: right;

  @media (max-width: 390px) {
    font-size: 16px;
    line-height: 18.8px;
    margin-bottom: 48px;
    text-align: center;
  }
`;

const BottomBlock = styled.div`
  width: 100%;
  padding-bottom: 67px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoScreen: React.FC = () => {
  const today = days[0];

  const localTime = new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <Wrapper>
      <TopBlock>
        <TopLeft>
          <LeftText>Hourly weather</LeftText>
        </TopLeft>
        <div>
          <InfoTime>{localTime}</InfoTime>
          <InfoDate>{today.date}</InfoDate>
        </div>
      </TopBlock>
      <BottomBlock>
        <Chart />
      </BottomBlock>
    </Wrapper>
  );
};

export default InfoScreen;
