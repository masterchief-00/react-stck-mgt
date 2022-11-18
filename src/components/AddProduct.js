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
              <input type="text" placeholder="Product name" name="name" />
              <input type="text" placeholder="Product SKU" name="SKU" />
              <input type="text" placeholder="Quantity" name="quantity" />
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <label style={{ fontSize: "20px" }}>Category:</label>
                <Categories>
                  <option value="all">Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="food">Foods & Drinks</option>
                  <option value="furnitures">Furnitures</option>
                </Categories>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "20px", marginBottom: "10px" }}>
                Description:
              </label>
              <textarea placeholder="Product description"></textarea>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "20px", marginBottom: "10px" }}>
                Add Image:
              </label>
              <ImageUpload>
                <label style={{ color: Colors.primary_variant_x }}>
                  Product image
                </label>
              </ImageUpload>
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
  border: solid 1px ${Colors.primary_variant_x};
  border-radius: 0.3rem;
  outline-color: ${Colors.primary_variant_x};

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
  gap: 30px;
  margin: 20px;

  input {
    border: none;
    border-bottom: solid 1px ${Colors.primary_variant};
    outline-color: transparent;
    font-size: 18px;
    color: ${Colors.text_variant};

    ::placeholder {
      color: ${Colors.primary_variant_x};
    }
  }
  textarea {
    min-height: 75px;
    width: 300px;
    padding: 10px;
    outline: none;
    border: solid 1px ${Colors.primary_variant_x};
    resize: none;
  }
`;
const ImageUpload = styled.div`
  border: dashed 2px ${Colors.primary_variant_x};
  height: 90px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AddProduct;
