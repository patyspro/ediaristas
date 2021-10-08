import { styled } from "@mui/material/styles";

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) =>
    theme.spacing(5) + " " + 0}; // espaço de margin: 40px 0
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) =>
    theme.palette.primary.main}; // acessando o tema da API MUI
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) =>
      theme.typography.body1
        .fontSize}; // transforma a fonta para media quando for dispositivos móveis
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + "0"}; //12px(1.5*8) 0
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) =>
      theme.typography.body2
        .fontSize}; // transforma a fonta para media quando for dispositivos móveis
  }
`;
