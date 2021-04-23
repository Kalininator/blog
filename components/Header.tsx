import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.navBg};
  width: auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`;

const NavA = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navText};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Header(): JSX.Element {
  return (
    <Nav>
      <Link href="/">
        <NavA>
          <h1>Alex Kalinin</h1>
        </NavA>
      </Link>
      <div>
        <NavA href="https://github.com/Kalininator">GitHub</NavA>
        <NavA href="https://www.linkedin.com/in/kalininator/">LinkedIn</NavA>
      </div>
    </Nav>
  );
}
