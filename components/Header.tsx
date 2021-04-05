import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <nav>
      <Link href="/">
        <a>
          <h1>Alex Kalinin</h1>
        </a>
      </Link>
      <div>
        <a href="https://github.com/Kalininator">GitHub</a>
        <a href="https://www.linkedin.com/in/kalininator/">LinkedIn</a>
      </div>
      <style jsx>{`
        nav {
          background: #3c3836;
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
          color: #fabd2f;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
