import { HeadPost } from './HeadPost';

export default function BlogPost({ children, meta }: any): JSX.Element {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}
