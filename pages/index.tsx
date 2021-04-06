import { Post } from '../components/Post';
import { posts } from '../components/getAllPosts';
import { NextPage } from 'next';
import Head from 'next/head';

const indexPage: NextPage = () => (
  <>
    <Head>
      <title>{"Alex Kalinin's Blog"}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content="My blog, talking about several of my projects, and some guides."
      ></meta>
    </Head>
    {posts
      .sort((a, b) => {
        return Date.parse(b.module.meta.date) - Date.parse(a.module.meta.date);
      })
      .map((post) => (
        <Post key={post.link} post={post} />
      ))}
  </>
);

export default indexPage;
