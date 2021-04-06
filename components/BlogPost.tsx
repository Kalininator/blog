import dayjs from 'dayjs';
import Head from 'next/head';
import { PostModule } from './getAllPosts';

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
      <h1 className="great-title">{meta.title}</h1>
      <div className="details">
        <span>{dayjs(meta.date).format('D MMMM YYYY')}</span>
        <span role="img" aria-label="one coffee">
          ☕ {meta.readTime + ' min read'}
        </span>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #d79921;
          }
          .great-title {
            font-size: 2rem;
          }
          .details span {
            color: #8ec07c;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
          }
        `}
      </style>
      <article>{children}</article>
    </>
  );
}
