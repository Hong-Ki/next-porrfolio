import styled from 'styled-components';
import { makeOpacityColor } from '~/styles/mixins';
import Link from 'next/link';

interface Props {
  isFitMode: boolean;
}

const styeldPack = {
  Hader: styled.header<{ isFitMode: boolean }>`
    width: 100%;
    display: flex;

    justify-content: space-between;

    align-items: center;

    transition-duration: 0.3s;

    ${({
      isFitMode,
      theme: {
        colorSet: { backgroundSub },
      },
    }) => {
      return `
      font-size: 1.4rem;
      ${
        isFitMode
          ? `
        padding: unset;
        position:fixed;
        padding: 20px;
        `
          : `
        background: ${makeOpacityColor(backgroundSub, 0.3)};
        padding: 32px;
      `
      }
     `;
    }}
  `,
  H1: styled.h1`
    font-weight: bold;

    font-size: 2.4rem;
    margin: unset;
  `,
  Nav: styled.nav`
    display: grid;
    column-gap: 1em;
    ${({ children }) =>
      `grid-template-columns: repeat(${
        Array.isArray(children) ? children.length : 0
      }, 1fr);`}
  `,
};

const Header = ({ isFitMode }: Props) => {
  return (
    <styeldPack.Hader isFitMode={isFitMode}>
      <styeldPack.H1>
        <Link href="/">
          <a>{'Min'}</a>
        </Link>
      </styeldPack.H1>
      <styeldPack.Nav>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </styeldPack.Nav>
    </styeldPack.Hader>
  );
};
export default Header;
