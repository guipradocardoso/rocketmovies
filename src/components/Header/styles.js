import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 116px;
   width: 100%;

   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({ theme}) => theme.COLORS.LINE_BOTTOM};

   padding: 0 120px;
`;

export const Brand = styled.div`
   display: flex;

   > h1 {
      font-size: 24px;
      font-weight: 700;
      color: ${({ theme}) => theme.COLORS.BRAND_COLOR};
      margin-right: 64px;
   }

`

export const Profile = styled.div`
   display: flex;
   align-items: center;


   > div {
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: 64px;
      margin-right: 9px;
      line-height: 18px;
      padding: 16px 0 ;

      strong {
         font-size: 14px;
         font-weight: 700;
         color: ${({ theme}) => theme.COLORS.WHITE};
      }

      span {
         font-size: 14px;
         font-weight: 400;
         color: ${({ theme}) => theme.COLORS.TEXT_INPUT};
      }
   }


   > img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
   }


`
