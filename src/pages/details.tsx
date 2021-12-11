import { useRouter } from 'next/router';
import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';

import Chart from '../components/Chart';
import DayContext from '../contexts/DayContext';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
`;

const TopBlock = styled.div`
  width: 100%;
  padding: 52px 76px 0 83px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 390px) {
    padding: 0;
    margin-bottom: 48px;
    flex-direction: column;
  }
`;

const TopLeft = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  @media (max-width: 390px) {
    width: 100%;
    height: 70px;
    padding-top: 0;
    padding-left: 28px;
    margin-bottom: 36px;
    background-color: #0e183a;
    justify-content: flex-start;
    align-items: center;
  }
`;

const TopLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const BackImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const BackText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 23.5px;
  color: #fff;
`;

const TopMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 18.8px;
  color: #fff;
  text-align: center;

  @media (max-width: 390px) {
    font-size: 14px;
    line-height: 16.45px;
    margin-bottom: 24px;
  }
`;

const TopRightDate = styled.div`
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
  padding-bottom: 67px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Details: React.FC = () => {
  const router = useRouter();
  const { selectedDay, setSelectedDay } = useContext(DayContext);

  const back = useCallback(() => {
    void router.push('/');

    setSelectedDay(null);
  }, [router, setSelectedDay]);

  return (
    <Wrapper>
      <TopBlock>
        <TopLeft>
          <TopLink onClick={back}>
            <BackImage src="images/arrow_back.png" alt="Back image" />
            <BackText>Back to home</BackText>
          </TopLink>
        </TopLeft>

        {selectedDay && (
          <>
            <TopMiddle>
              <WeatherImage src="images/sunny.png" alt="Weather image" />
              <Temperature>{`${selectedDay.temperature.day}° / ${selectedDay.temperature.night}°`}</Temperature>
              <Description>{selectedDay.description}</Description>
            </TopMiddle>
            <TopRightDate>{selectedDay.date}</TopRightDate>
          </>
        )}
      </TopBlock>

      {selectedDay && (
        <>
          <BottomBlock>
            <Chart />
          </BottomBlock>
        </>
      )}
    </Wrapper>
  );
};

export default Details;
