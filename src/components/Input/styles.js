import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;

   background-color: ${({theme}) => theme.COLORS.BG_LIGHT};
   color: ${({theme}) => theme.COLORS.TEXT_INPUT};
   
   margin-bottom: 8px;
   border-radius: 10px;

   > input {
      height: 56px;
      width: 100%;
      max-width: 340px;

      padding: 20px;

      color: ${({theme}) => theme.COLORS.WHITE};
      background: none;
      border: 0;

      &::placeholder {
         color: ${({theme}) => theme.COLORS.TEXT_INPUT};
      }


   }

   > svg {
      margin-left: 16px;
   }




`