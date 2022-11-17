import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

import prdImg from "../assets/images/product-package.jpg";

const Products = () => {
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
              All products
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <label
                style={{
                  color: Colors.text,
                  fontSize: "20px",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
              >
                Filter:
              </label>
              <Categories>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="food">Foods & Drinks</option>
                <option value="furnitures">Furnitures</option>
              </Categories>
            </div>
          </div>
          <Button>
            <AiOutlineAppstoreAdd size={25} />
            Create new product
          </Button>
        </Header>
        <TableWrapper>
          <Table>
            <tr>
              <th>Image</th>
              <th>Product name</th>
              <th>Category</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Expiry date</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <ProductImage src={prdImg} alt="product-thumbnail" />
              </td>
              <td>HP Printer</td>
              <td>Electronics</td>
              <td>EL-PR-123</td>
              <td>34</td>
              <td>12/09/2028</td>
              <td>$567</td>
              <td>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <FaEdit size={20} color={Colors.primary_variant_x} />
                </button>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <BiTrash size={20} color={Colors.primary_variant} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <ProductImage src={prdImg} alt="product-thumbnail" />
              </td>
              <td>HP Elitebook 8440p</td>
              <td>Electronics</td>
              <td>EL-LP-123</td>
              <td>349</td>
              <td>12/09/2028</td>
              <td>$300</td>
              <td>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <FaEdit size={20} color={Colors.primary_variant_x} />
                </button>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <BiTrash size={20} color={Colors.primary_variant} />
                </button>
              </td>
            </tr>
          </Table>
        </TableWrapper>
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
  width: 140px;
  color: ${Colors.bg};
  font-size: 16px;
  background-color: ${Colors.primary_variant_x};
  border: solid 1px transparent;
  border-radius: 0.3rem;
  outline-color: transparent;

  option {
    background-color: ${Colors.bg};
    color: ${Colors.text};
  }
`;
const Button = styled.button`
  background-color: ${Colors.primary_variant_x};
  width: max-content;
  height: 2.7rem;
  border: solid 1px transparent;
  border-radius: 0.2rem;
  color: ${Colors.bg};
  margin-top: 3rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  gap: 3px;
  align-items: center;
  cursor: pointer;
  box-shadow: 1px 1px 15px;
  transition: all 0.2s;

  &:hover {
    background-color: ${Colors.bg};
    border-color: ${Colors.primary_variant_x};
    color: ${Colors.primary};
  }
`;
const TableWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: max-content;
  box-shadow: 2px 2px 8px;
  background-color: ${Colors.bg};
  margin-top: 10px;
  border: solid 1px transparent;
  border-radius: 1rem;
  overflow-x: hidden;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 0;

  tr,
  th {
    border: 1px solid #ddd;
    padding: 8px;
    height: max-content;
    transition: all 0.3s;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    padding: 5px;
    text-align: center;
    background-color: ${Colors.text_variant};
    color: white;
    font-weight: 400;
  }
  td {
    padding: 5px;
    text-align: center;
    color: ${Colors.text_variant};
  }
`;
const ProductImage = styled.img`
  height: 50px;
  width: 80px;
  border-radius: 5px;
  align-self: center;
`;
export default Products;
