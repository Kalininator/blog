import Head from 'next/head';

type PostMetadata = {
  title: string;
  description: string;
  date: string;
  readTime: number;
};
export const HeadPost = ({
  meta,
  isBlogPost,
}: {
  meta: PostMetadata;
  isBlogPost?: boolean;
}): JSX.Element => (
  <>
    <Head>
      <meta name="Description" content={meta.description}></meta>
      <title>{meta.title}</title>
    </Head>
    <h1 className={isBlogPost ? 'great-title' : undefined}>{meta.title}</h1>
    <div className="details">
      {isBlogPost ? null : <p>{meta.description}</p>}
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
  </>
);
