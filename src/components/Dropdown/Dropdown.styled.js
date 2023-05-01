import styled from "styled-components";
import { Button } from "../../utils/reusableStyles";

export const DropdownSelect = styled(Button)``;

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

// background: url(${arrowDown}) right 15px center;
//   background-color: ${(props) => props.theme.colors.whiteMuted};
//   background-size: 7px;
//   @media ${(props) => props.theme.device.tablet} {
//     font-size: 14px;
//     background-size: 10px;
//   }
