import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
   height: 100vh;
   margin: 0 auto;

   

   

`
export const Form = styled.form`
    margin: 0 120px;

    > header {
      margin: 40px 0;

      h2 {
         font-size: 36px;
         font-weight: 500;
         line-height: 47px;
         margin-top: 24px;
      }

   }
    


    > div {
      display: flex;
      gap: 40px;
    }



    > Section {

      > h2 {
         padding: 0;
      }



      > div{
         display: flex;
         align-items: center;
         background-color: ${({theme}) => theme.COLORS.BG_DARK};
         height: 88px;
         width: 100%;
         border-radius: 8px;
         padding: 16px;
         gap: 24px;
      }
    }








`

