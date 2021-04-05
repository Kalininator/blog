import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <nav>
      <Link href="/">
        <a>
          <h1>Alex Kalinin</h1>
        </a>
      </Link>
      <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
