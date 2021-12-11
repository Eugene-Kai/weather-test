import React from 'react';
import styled from 'styled-components';

import InfoScreen from '../components/screens/Info';
import TodayScreen from '../components/screens/Today';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 390px) {
    height: auto;
    flex-direction: column;
  }
`;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <TodayScreen />
      <InfoScreen />
    </Wrapper>
  );
};

export default Home;
