import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
          <Image src="" />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 10vw;
`;
const Wrapper = styled.div`
  background-color: ${Colors.primary};
  width: 100%;
  height: 100%;
`;
const Image=styled.img`

`
export default Sidebar;
