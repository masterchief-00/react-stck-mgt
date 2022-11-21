import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors";

const AddProduct = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <div>
            <label
              style={{
                color: Colors.text,
                fontSize: "30px",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Add new product
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "20px",
              }}
            ></div>
          </div>
        </Header>
        <FormWrapper>
          <Form>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{ fontSize: "15px", fontWeight: "600" }}>
                Product name:
              </label>

              <input type="text" placeholder="Product name" name="name" />

              <label style={{ fontSize: "15px", fontWeight: "600" }}>
                Product SKU:
              </label>

              <input type="text" placeholder="Product SKU" name="SKU" />

              <label style={{ fontSize: "15px", fontWeight: "600" }}>
                Quantity:
              </label>

              <input type="text" placeholder="Quantity" name="quantity" />
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <label style={{ fontSize: "15px", fontWeight: "600" }}>
                  Category:
                </label>
                <Categories>
                  <option value="none">...</option>
                  <option value="electronics">Electronics</option>
                  <option value="food">Foods & Drinks</option>
                  <option value="furnitures">Furnitures</option>
                </Categories>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
                gap: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                Description:
              </label>
              <textarea placeholder="Product description"></textarea>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  Add Image:
                </label>
                <ImageUpload>
                  <label style={{ color: Colors.text_variant }}>
                    Product image
                  </label>
                </ImageUpload>
              </div>
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <FormButton>Add product</FormButton>
              <FormButton isClear>Clear</FormButton>
            </div>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vw;
`;
const Categories = styled.select`
  padding: 5px;
  width: max-content;
  color: ${Colors.text};
  font-size: 16px;
  background-color: ${Colors.bg};
  border: solid 1px ${Colors.text_variant};
  border-radius: 0.3rem;
  outline-color: ${Colors.text_variant};

  option {
    background-color: ${Colors.bg};
    color: ${Colors.text};
  }
`;
const FormWrapper = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-between;
  height: max-content;
  box-shadow: 2px 2px 8px;
  background-color: ${Colors.bg};
  margin-top: 10px;
  padding: 5px;
  border: solid 1px transparent;
  border-radius: 1rem;
  overflow-x: hidden;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 20px;

  input {
    border: none;
    border: solid 0.7px ${Colors.text_variant};
    border-radius: 5px;
    padding: 5px;
    outline-color: transparent;
    font-size: 18px;
    color: ${Colors.text_variant};

    ::placeholder {
      color: ${Colors.text_variant};
      font-size: 15px;
    }
  }
  textarea {
    min-height: 75px;
    width: 300px;
    padding: 10px;
    outline: none;
    border: solid 1px ${Colors.text_variant};
    border-radius: 5px;
    resize: none;
  }
`;
const ImageUpload = styled.div`
  border: dashed 2px ${Colors.text_variant};
  height: 90px;
  width: 318px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormButton = styled.button`
  background-color: ${(props) =>
    props.isClear ? Colors.bg : Colors.primary_variant_x};
  border: solid 1px
    ${(props) => (props.isClear ? Colors.text_variant : "transparent")};
  border-radius: 5px;
  padding: 15px;
  width: 150px;
  color: ${(props) => (props.isClear ? Colors.text : Colors.bg)};
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => (props.isClear ? Colors.text : Colors.bg)};
    color: ${(props) => (props.isClear ? Colors.bg : Colors.primary_variant)};
    border-color: ${(props) =>
      props.isClear ? "transparent" : Colors.primary_variant_x};
  }
`;

export default AddProduct;
