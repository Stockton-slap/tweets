import styled from "styled-components";
import { Button } from "../../utils/reusableStyles";
import arrowDown from "../../images/arrow.svg";

export const DropdownSelect = styled(Button)`
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: right 15px center;
`;

export const SelectContainer = styled.div``;

export const SelectCategories = styled.ul`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  position: absolute;
  z-index: 1;

  margin-bottom: 50px;
`;

export const SelectCategoriesItem = styled.li`
  padding-top: 15px;

  cursor: pointer;
  opacity: 0.7;
  list-style: none;
`;
