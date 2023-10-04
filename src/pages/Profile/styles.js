import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;


   > header {
      display: flex;
      align-items: center;
      width: 100%;
      height: 144px;
      background: ${({ theme}) => theme.COLORS.BG_PROFILE};
      

      > a {
         display: flex;
         align-items: center;
         color: ${({ theme }) => theme.COLORS.BRAND_COLOR};
         margin: 0 144px;
         
         svg {
            width: 16px;
            height: 16px;
            margin-right: 8px;
         }

      }
   }
`

export const Form = styled.form`
   max-width: 340px;
   margin: 64px auto 0;

   > div:nth-child(4){
      margin-top: 24px;
   }
   
`

export const Avatar = styled.div`
   position: relative;
   margin: -160px auto 64px;

   width: 186px;
   height: 186px;

   > img {
      width: 186px;
      height: 186px;
      border-radius: 50%;
   }

   > label {
      width: 48px;
      height: 48px;

         
      background-color: ${({ theme }) => theme.COLORS.BRAND_COLOR};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 7px;
      right: 7px;

      cursor: pointer;

      input {
         display: none;
      }

      svg {
         width: 20px;
         height: 20px;
         color: ${({ theme }) => theme.COLORS.BG_LIGHT};
      }
   }

`
