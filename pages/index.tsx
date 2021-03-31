import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const IndexPage: NextPage = () => (
  <>
    <h1>Welcome to Next.js</h1>
    <p>Here is index.tsx</p>
    <Link href="./about">
      <button type="button">Go to About</button>
    </Link>
  </>
);

export default IndexPage;
