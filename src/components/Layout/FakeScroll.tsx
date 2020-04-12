import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';

interface FakeScroll {
  height?: number;
}

const styledPack = {
  Wrapper: styled.aside`
    width: 8px;
    height: 105vh;

    position: fixed;

    right: 0;
    top: 0;
  `,
  FakeScroll: styled.div.attrs<FakeScroll>(({ height = 0 }) => ({
    style: { height: `${height}%` },
  }))<FakeScroll>`
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

const FakeScroll = () => {
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <styledPack.FakeScroll height={height} />
    </styledPack.Wrapper>
  );
};

export default FakeScroll;
