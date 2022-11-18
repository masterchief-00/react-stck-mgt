import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

import prdImg from "../assets/images/product-package.jpg";

const Shipping = () => {
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
              All approved orders
            </label>
          </div>
        </Header>
        <TableWrapper>
          <Table>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Names</th>
              <th>Items</th>
              <th>Province</th>
              <th>District</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#5675</td>
              <td>12/09/2022</td>
              <td>Jane Doe</td>
              <td>3</td>
              <td>Northern</td>
              <td>Gicumbi</td>
              <td style={{ color: "green", fontWeight: "bold" }}>Approved</td>
            </tr>
            <tr>
              <td>#3678</td>
              <td>11/09/2022</td>
              <td>Chris Doe</td>
              <td>6</td>
              <td>Western</td>
              <td>Rubavu</td>
              <td style={{ color: "green", fontWeight: "bold" }}>Approved</td>
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


const TableWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: max-content;
  box-shadow: 2px 2px 8px;
  background-color: ${Colors.bg};
  margin-top: 20px;
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
export default Shipping;
