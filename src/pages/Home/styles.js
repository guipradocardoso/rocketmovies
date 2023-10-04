import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;

   > header {
      display: flex;
      padding: 0 123px;
      margin: 50px 0 40px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h2 {
         color: ${({ theme }) => theme.COLORS.WHITE};
         font-size: 32px;
         font-weight: 400;
      }

      Button {
         margin: 0;
         display: flex;
         width: 200px;

      }
   }
`

export const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid red;

   overflow-y: auto
`
