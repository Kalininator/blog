import Head from 'next/head';
import { PostMetadata } from './HeadPost';

export default function BlogPost({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: PostMetadata;
}): JSX.Element {
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
            color: #f39c12;
          }
          .great-title {
            font-size: 2rem;
          }
          .details span {
            color: #bdbdbd;
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
