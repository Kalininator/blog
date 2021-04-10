import Link from 'next/link';
import dayjs from 'dayjs';
import { post } from './getAllPosts';
import styled from 'styled-components';

const PostTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

const PostDetails = styled.div`
  margin-bottom: 2rem;
`;

const PostDetailSpan = styled.span`
  color: ${({ theme }) => theme.colors.detailText};
  margin-right: 1rem;
`;

const PlainLink = styled.a`
  text-decoration: none;
`;

export const Post = ({ post }: { post: post }): JSX.Element => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <>
      <Link href={link}>
        <PlainLink>
          <article>
            <PostTitle>{meta.title}</PostTitle>
            <PostDetails>
              <p>{meta.description}</p>
              <PostDetailSpan>{dayjs(meta.date).format('D MMMM YYYY')}</PostDetailSpan>
              <PostDetailSpan role="img" aria-label="one coffee">
                ☕ {meta.readTime + ' min read'}
              </PostDetailSpan>
            </PostDetails>
          </article>
        </PlainLink>
      </Link>
    </>
  );
};
