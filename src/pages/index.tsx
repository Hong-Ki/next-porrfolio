import styled from 'styled-components';
import Contents from '~/components/layout/contents';
import { useState, useEffect } from 'react';
import About from '~/components/sections/about';

const StyledMain = styled.main`
  padding: 124px 0;
  width: 100%;
  display: grid;
`;

const Main = (props: any) => {
  const [data, setData] = useState([]);
  const getData = async () =>
    await fetch('http://localhost:3000/api/main')
      .then(res => res.json())
      .then(data => setData(data));
  useEffect(() => {
    getData();
  }, []);
  return (
    <StyledMain>
      <About />
    </StyledMain>
  );
};

export default Main;
