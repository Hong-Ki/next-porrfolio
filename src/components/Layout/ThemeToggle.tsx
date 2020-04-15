import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Themes } from '~/constants/theme';
interface Props {
  toggleTheme(theme: Themes): void;
  themeName: Themes;
}
const styledPack = {
  Wrapper: styled.div<{ themeName: Themes; isHide: boolean }>`
    position: fixed;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;

    cursor: default;

    font-size: 32px;
    height: 124px;

    bottom: -64px;
    right: 16px;

    transition-duration: 0.5s;
    & > * {
      width: 100%;
      display: flex;
    }
    &:last-child() {
      justify-content: flex-end;
    }

    ${({ themeName, isHide }) =>
      `${
        themeName === 'light'
          ? `transform: rotate(0deg)`
          : 'transform: rotate(180deg)'
      };
      display: ${isHide ? 'none' : 'flex'};
    `}
  `,
};

const ThemeToggle = ({ toggleTheme, themeName }: Props) => {
  const onClick = () => {
    toggleTheme(themeName === 'light' ? 'dark' : 'light');
  };
  const [isHide, setIsHide] = useState<boolean>(false);
  const handleTouchMove = () => {
    setIsHide(true);
  };
  const handleTouchCancel = () => {
    setIsHide(false);
  };
  useEffect(() => {
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchCancel);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchCancel);
    };
  }, []);
  return (
    <styledPack.Wrapper onClick={onClick} themeName={themeName} isHide={isHide}>
      <div>☀️</div>
      <div>🌕</div>
    </styledPack.Wrapper>
  );
};

export default ThemeToggle;
