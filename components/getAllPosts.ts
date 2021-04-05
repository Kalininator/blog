import { PostMetadata } from './PostMetadata';

export type PostModule = {
  meta: PostMetadata;
  children: React.ReactNode;
};
export type post = {
  link: string;
  module: PostModule;
};

function importAll(r: __WebpackModuleApi.RequireContext): post[] {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(fileName),
  }));
}

export const posts = importAll(require.context('../pages/', true, /\.mdx$/));
