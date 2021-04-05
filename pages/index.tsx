import { Post } from '../components/Post';
import { posts } from '../components/getAllPosts';
import { NextPage } from 'next';

const indexPage: NextPage = () => (
  <>
    {posts.map((post) => (
      <Post key={post.link} post={post} />
    ))}
  </>
);

export default indexPage;
