import { ReactChild } from 'react';
import styled from 'styled-components';

type DirectionType = 'column' | 'row';
interface Props {
  direction?: DirectionType;
}

interface Props {
  children?: ReactChild;
}

const StyledContents = styled.article`
  width: 100vw;
  min-height: 100vh;
`;

const Contents = ({ children }: Props) => {
  return <StyledContents>{children}</StyledContents>;
};

export default Contents;
