import styled from "styled-components";
import backgroundImg from "../../assets/images/background-signin.png";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: stretch;
`

export const Form = styled.form`
   display: flex;
   padding: 0 160px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;

   > header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      h1 {
         font-size: 48px;
         color: ${({ theme }) => theme.COLORS.BRAND_COLOR};
      }
      
      p {
         font-size: 14px;
         font-weight: 400;
         color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
      }
      
      h2 {
         font-size: 24px;
         font-weight: 500;
         color: ${({ theme }) => theme.COLORS.WHITE};
         margin: 48px 0;
      }
   }

   > a {
      margin-top: 42px;
      color: ${({ theme }) => theme.COLORS.BRAND_COLOR};
   }

`

export const Background = styled.div`
   flex: 1;
   background: url(${backgroundImg}) no-repeat center center;
   background-size: cover;
`