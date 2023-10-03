import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

   background-color: ${({theme}) => theme.COLORS.BG_LIGHT};
   color: ${({theme}) => theme.COLORS.TEXT_INPUT};

   border: none;
   resize: none;

   margin: 40px 0%;
   border-radius: 10px;
   padding: 19px 16px;

   &::placeholder {
     color: ${({theme}) => theme.COLORS.TEXT_INPUT_PLACEHOLDER};
   }

`