import React from "react";
import Styled from "styled-components";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Products />
    </Container>
  );
}

const Container = Styled.div`
    display: flex;
`;
