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
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.plainText};
    font-size: 1rem;
  }
`;

const components: MDXProviderComponentsProp = {
  a: styled.a`
    color: ${({ theme }) => theme.colors.plainText};
  `,
  h1: styled.h1`
    font-weight: 700;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6em;
    color: ${({ theme }) => theme.colors.blogHeader};
  `,
  h2: styled.h2`
    font-weight: 600;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3em;
    color: ${({ theme }) => theme.colors.blogHeader};
  `,
  h3: styled.h3`
    font-weight: 600;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.blogHeader};
  `,
  pre: styled.pre`
    white-space: pre-wrap;
  `,
  img: styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    object-fit: contain;
  `,
};

const Content = styled.div`
  max-width: 800px;
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
        <script
          data-goatcounter="https://kalininator.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
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
