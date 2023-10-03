import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  height: 56px;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BG_LIGHT };

  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};

  border: ${({ theme, $isnew }) => $isnew ? `2px  dashed  ${theme.COLORS.TEXT_INPUT}` : "none" };

  border-radius: 10px;
  padding-right: 16px;

  > button {
    color: ${({ theme }) => theme.COLORS.BRAND_COLOR};
    border: none;
    background: none;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  > input {
    height: 56px;
    width: 100%;
    background: transparent;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    }
  }
  

`