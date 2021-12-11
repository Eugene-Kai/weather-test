import { AppProps } from 'next/app';
/* eslint-disable react/jsx-props-no-spreading */
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import '../styles/fonts.css';
import '../styles/globals.css';

import DaysList from '../components/lists/DaysList';
import DayProvider from '../contexts/DayContext/DayProvider';

const theme = {
  colors: {
    blue: '#2D4392',
    dark: '#09112D',
  },
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 390px) {
    height: auto;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Weather Test</title>
        <meta name="description" content="weather" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <DayProvider>
          <Wrapper>
            <Component {...pageProps} />
            <DaysList />
          </Wrapper>
        </DayProvider>
      </ThemeProvider>
    </>
  );
};

// for turning off SSR
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
