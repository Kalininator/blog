import Link from 'next/link';
import { post } from './getAllPosts';

export const Post = ({ post }: { post: post }): JSX.Element => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <>
      <Link href={link}>
        <a>
          <article>
            <h1>{meta.title}</h1>
            <div className="details">
              <p>{meta.description}</p>
              <span>{meta.date}</span>
              <span role="img" aria-label="one coffee">
                ☕ {meta.readTime + ' min read'}
              </span>
            </div>
          </article>
        </a>
      </Link>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #d79921;
          }
          .details span {
            color: #8ec07c;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 2rem;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};
