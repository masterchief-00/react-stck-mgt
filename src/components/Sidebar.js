import React, { useState } from "react";
import styled from "styled-components";
import { BsCartFill } from "react-icons/bs";
import { MdLocalShipping, MdMessage } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { TbDoorExit } from "react-icons/tb";
import { Colors } from "../Colors";
import logo from "../assets/images/placeholder-logo-1.png";
import avatar from "../assets/images/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { HomeActions } from "../redux/HomeSlice";

const Sidebar = () => {
  const activeTab = useSelector((state) => state.home.activeTab);
  const [optionsVisible, setOptionsVisibility] = useState(false);
  const dispatch = useDispatch();

  const handleTabChange = (newTab) => {
    dispatch(HomeActions.setActiveTab(newTab));
  };

  return (
    <Container>
      <Wrapper>
        <Image src={logo} alt="logo-placeholder" />
        <ServicesWrapper>
          <ServiceCard
            isSelected={activeTab === "products" ? true : false}
            onClick={() => handleTabChange("products")}
          >
            <BsCartFill size={25} color={Colors.primary_variant_x} />
            <label
              style={{
                fontSize: 18,
                color: Colors.bg,
              }}
            >
              Products
            </label>
          </ServiceCard>
          <ServiceCard
            isSelected={activeTab === "shipping" ? true : false}
            onClick={() => handleTabChange("shipping")}
          >
            <MdLocalShipping size={25} color={Colors.primary_variant_x} />
            <label
              style={{
                fontSize: 18,
                color: Colors.bg,
              }}
            >
              Shipping
            </label>
          </ServiceCard>
          <ServiceCard
            isSelected={activeTab === "messages" ? true : false}
            onClick={() => handleTabChange("messages")}
          >
            <MdMessage size={25} color={Colors.primary_variant_x} />
            <label
              style={{
                fontSize: 18,
                color: Colors.bg,
              }}
            >
              Messages
            </label>
          </ServiceCard>
          <ServiceCard
            isSelected={activeTab === "add_products" ? true : false}
            onClick={() => handleTabChange("add_products")}
          >
            <AiOutlineAppstoreAdd size={25} color={Colors.primary_variant_x} />
            <label
              style={{
                fontSize: 18,
                color: Colors.bg,
              }}
            >
              Add products
            </label>
          </ServiceCard>
        </ServicesWrapper>
        <User onClick={() => setOptionsVisibility(!optionsVisible)}>
          <Avatar src={avatar} alt="user-avatar" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ color: Colors.bg, fontWeight: "bold" }}>
              John Doe
            </label>
            <label
              style={{
                color: Colors.primary_variant_x,
                fontSize: "15px",
                fontWeight: "300",
              }}
            >
              Warehouse manager
            </label>
          </div>
        </User>
        {optionsVisible && (
          <UserOptions>
            <Action onClick={{}}>
              <TbDoorExit size={20} color={Colors.primary_variant_x} />
              <label
                style={{
                  fontSize: 15,
                  color: Colors.bg,
                }}
              >
                Log out
              </label>
            </Action>
          </UserOptions>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 18vw;
  overflow: hidden;
  box-shadow: 1px 1px 8px;
`;
const Wrapper = styled.div`
  background-color: ${Colors.text};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  height: 80px;
  width: 170px;
`;
const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const ServiceCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 15px;
  background-color: ${(props) =>
    props.isSelected ? Colors.text_variant : "transparent"};
  transition: all 0.2s;

  &:hover {
    background-color: ${Colors.text_variant};
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  margin-top: 98%;
  z-index: 4;
  transition: all 0.3s;

  &:hover {
    background-color: ${Colors.text_variant};
    border: none;
    border-top: solid 1px ${Colors.primary_variant};
  }
`;
const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const UserOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.text};
  height: 200px;
  width: 230px;
  margin-left: 5px;
  top: 367px;
  border: solid 1px ${Colors.primary_variant};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: none;
  overflow: hidden;
  z-index: 3;
`;
const Action = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 15px;
  background-color: transparent;
  transition: all 0.2s;

  &:hover {
    background-color: ${Colors.text_variant};
  }
`;
export default Sidebar;
