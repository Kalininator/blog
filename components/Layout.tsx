import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #282828;
    color: #fbf1c7;
    font-size: 1rem;
  }
`;

const components: MDXProviderComponentsProp = {
  a: styled.a`
    color: #fbf1c7;
  `,
  h1: styled.h1`
    font-weight: 700;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `,
  pre: styled.pre`
    white-space: pre-wrap;
  `,
  img: styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;
  `,
};

const Content = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export default function Layout({
  children,
  pageTitle,
  description,
}: {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
}): JSX.Element {
  return (
    <MDXProvider components={components}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap');
      `}</style>
      <GlobalStyle />
      <main>
        <Header />
        <Content>{children}</Content>
      </main>
    </MDXProvider>
  );
}
