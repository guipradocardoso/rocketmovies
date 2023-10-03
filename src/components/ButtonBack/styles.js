import styled from "styled-components";


export const Container = styled.button`
   display: flex;
   color: ${({ theme}) => theme.COLORS.BRAND_COLOR};
   background: transparent;
   font-size: 16px;
   font-weight: 400;
   line-height: 21px;
   align-items: center;
   border: none;
   cursor: pointer;

   > svg {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      color: ${({ theme}) => theme.COLORS.BRAND_COLOR};
   }







`