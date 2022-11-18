import React from "react";
import { useSelector } from "react-redux";
import Styled from "styled-components";
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";
import Shipping from "../components/Shipping";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const activeTab = useSelector((state) => state.home.activeTab);

  return (
    <Container>
      <Sidebar />
      {activeTab === "products" && <Products />}
      {activeTab === "shipping" && <Shipping />}
      {activeTab==='add_products' && <AddProduct />}
    </Container>
  );
}

const Container = Styled.div`
    display: flex;
`;
