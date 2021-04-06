import dayjs from 'dayjs';
import Head from 'next/head';
import styled from 'styled-components';
import { PostModule } from './getAllPosts';

const GreatTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #d79921;
`;

const DetailsSection = styled.div`
  margin-bottom: 1rem;
`;

const Details = styled.span`
  color: #8ec07c;
  margin-right: 1rem;
`;

export default function BlogPost({ children, meta }: PostModule): JSX.Element {
  return (
    <>
      <Head>
        <meta name="Description" content={meta.description}></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <title>{meta.title}</title>
      </Head>
      <GreatTitle className="great-title">{meta.title}</GreatTitle>
      <DetailsSection>
        <Details>{dayjs(meta.date).format('D MMMM YYYY')}</Details>
        <Details role="img" aria-label="one coffee">
          ☕ {meta.readTime + ' min read'}
        </Details>
      </DetailsSection>
      <article>{children}</article>
    </>
  );
}
