import styled from "styled-components";

export const Container = styled.button`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme}) => theme.COLORS.BRAND_COLOR};
   color: ${({ theme}) => theme.COLORS.LINE_BOTTOM};

   height: 56px;
   border: 0;
   padding: 0 16px;
   margin-top: 24px;
   border-radius: 10px;
   font-weight: 500;




   &:disabled{
      opacity: 0.5;
   }
   `