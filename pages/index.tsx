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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
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
