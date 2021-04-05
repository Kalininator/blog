import Head from 'next/head';
import { PostModule } from './getAllPosts';

export default function BlogPost({ children, meta }: PostModule): JSX.Element {
  return (
    <>
      <Head>
        <meta name="Description" content={meta.description}></meta>
        <title>{meta.title}</title>
      </Head>
      <h1 className="great-title">{meta.title}</h1>
      <div className="details">
        <span>{meta.date}</span>
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
