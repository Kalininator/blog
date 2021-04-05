import Link from 'next/link';
import { post } from './getAllPosts';

export const Post = ({ post }: { post: post }): JSX.Element => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <>
      <article>
        <Link href={link}>
          <a>
            <h1>{meta.title}</h1>
          </a>
        </Link>
        <div className="details">
          <p>{meta.description}</p>
          <span>{meta.date}</span>
          <span role="img" aria-label="one coffee">
            ☕ {meta.readTime + ' min read'}
          </span>
        </div>
        <Link href={link}>
          <a>Read more →</a>
        </Link>
      </article>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f39c12;
          }
          .details span {
            color: #bdbdbd;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};
