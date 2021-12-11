/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';

import days from '../../data/days';
import CircleProgress from '../CircleProgress';

const Wrapper = styled.div`
  flex: 3;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 390px) {
    width: 100%;
  }
`;

const BackBackground = styled.img`
  width: 387px;
  height: 409px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;

  @media (max-width: 390px) {
    width: 100%;
    height: auto;
  }
`;

const TopBlock = styled.div`
  width: 100%;
  padding: 52px 50px 0 79px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 390px) {
    padding: 48px 0 0 0;
    margin-bottom: 45px;
    flex-direction: column;
  }
`;

const TopLeft = styled.div`
  padding-top: 15px;

  @media (max-width: 390px) {
    padding-top: 0;
    margin-bottom: 47px;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28.2px;
  color: #fff;
  margin-bottom: 12px;

  @media (max-width: 390px) {
    font-size: 20px;
    line-height: 23.5px;
    text-align: center;
  }
`;

const SubText = styled.div`
  font-size: 16px;
  line-height: 18.8px;
  color: #b0bcc8;

  @media (max-width: 390px) {
    font-size: 14px;
    line-height: 16.45px;
    text-align: center;
  }
`;

const WeatherImage = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 15px;

  @media (max-width: 390px) {
    margin-bottom: 12px;
  }
`;

const Temperature = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.45px;
  color: #fff;
  text-align: right;
  margin-bottom: 8px;

  @media (max-width: 390px) {
    font-size: 14px;
    line-height: 16.45px;
    text-align: center;
  }
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 18.8px;
  color: #fff;
  text-align: right;

  @media (max-width: 390px) {
    font-size: 14px;
    line-height: 16.45px;
    text-align: center;
  }
`;

const MiddleBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 390px) {
    margin-bottom: 96px;
  }
`;

const MiddleBottom = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MiddleText = styled.div<{ side: 'left' | 'right' }>`
  font-size: 14px;
  line-height: 16.45px;
  color: #b0bcc8;
  margin-left: ${({ side }) => (side === 'left' ? -50 : 0)}px;
  margin-right: ${({ side }) => (side === 'right' ? -50 : 0)}px;

  @media (max-width: 390px) {
    font-size: 11px;
    line-height: 12.93px;
    margin-left: ${({ side }) => (side === 'left' ? -40 : 0)}px;
    margin-right: ${({ side }) => (side === 'right' ? -40 : 0)}px;
  }
`;

const BottomBlock = styled.div`
  width: 100%;
  padding: 0 77px 64px 79px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 390px) {
    padding: 0 43px 42px 43px;
  }
`;

const InfoTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28.2px;
  color: #fff;
  margin-bottom: 12px;

  @media (max-width: 390px) {
    font-size: 18px;
    line-height: 21.15px;
    margin-bottom: 8px;
  }
`;

const InfoDescription = styled.div`
  font-size: 16px;
  line-height: 18.8px;
  color: #b0bcc8;

  @media (max-width: 390px) {
    font-size: 13px;
    line-height: 15.28px;
  }
`;

const TodayScreen: React.FC = () => {
  const today = days[0];

  return (
    <Wrapper>
      <BackBackground src="images/today_background.png" alt="Today background" />
      <TopBlock>
        <TopLeft>
          <Title>Good Morning</Title>
          <SubText>Spend some quality time it’s sunny!</SubText>
        </TopLeft>
        <div>
          <WeatherImage src="images/sunny.png" alt="Weather image" />
          <Temperature>{`${today.temperature.day}° / ${today.temperature.night}°`}</Temperature>
          <Description>{today.description}</Description>
        </div>
      </TopBlock>
      <MiddleBlock>
        <CircleProgress size={window.screen.width <= 390 ? 248 : 336} percents={50} strokeWidth={3} cut="half" />
        <MiddleBottom>
          <MiddleText side="left">Sunset 5:30 PM</MiddleText>
          <MiddleText side="right">Sunset 5:30 PM</MiddleText>
        </MiddleBottom>
      </MiddleBlock>
      <BottomBlock>
        <div>
          <InfoTitle>800mb</InfoTitle>
          <InfoDescription>Pressure</InfoDescription>
        </div>
        <div>
          <InfoTitle>87%</InfoTitle>
          <InfoDescription>Humidity</InfoDescription>
        </div>
        <div>
          <InfoTitle>4.3km</InfoTitle>
          <InfoDescription>Visibility</InfoDescription>
        </div>
      </BottomBlock>
    </Wrapper>
  );
};

export default TodayScreen;
