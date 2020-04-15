import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';

interface ScrollProgressBar {
  height?: number;
  onChange?(height: number): void;
}

const styledPack = {
  Wrapper: styled.aside`
    width: 8px;
    height: 105vh;

    display: flex;

    position: fixed;

    right: 0;
    top: 0;
  `,
  ProgressBar: styled.div.attrs<ScrollProgressBar>(({ height = 0 }) => ({
    style: { height: `${height}%` },
  }))<ScrollProgressBar>`
    width: 100%;
    ${({
      theme: {
        colorSet: { text },
      },
    }) => `
    background-color: ${text};

    transition-duration: 0.2s;
    `}
  `,
};

const ScrollProgressBar = ({ onChange }: ScrollProgressBar) => {
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (onChange) onChange(height);
  }, [height]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop <= 0) {
      setHeight(0);
      return;
    }
    const percent =
      Math.floor((scrollTop / (scrollHeight - clientHeight)) * 25) * 4;
    setHeight(percent);
  };

  return (
    <styledPack.Wrapper>
      <styledPack.ProgressBar height={height} />
    </styledPack.Wrapper>
  );
};

export default ScrollProgressBar;
