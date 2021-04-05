import Link from 'next/link';
import { HeadPost } from './HeadPost';

export const Post = ({ post }: any): JSX.Element => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <HeadPost meta={meta} />
      <Link href={link}>
        <a>Read more →</a>
      </Link>
    </article>
  );
};
